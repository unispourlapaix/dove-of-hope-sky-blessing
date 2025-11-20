# Script de compression audio MP3 vers 128 kbps
# Crée des copies avec suffixe -128

Write-Host "🎵 Compression des fichiers MP3 en 128 kbps..." -ForegroundColor Cyan
Write-Host ""

# Vérifier si FFmpeg est installé
$ffmpegPath = Get-Command ffmpeg -ErrorAction SilentlyContinue

if (-not $ffmpegPath) {
    Write-Host "❌ ERREUR: FFmpeg n'est pas installé ou n'est pas dans le PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Pour installer FFmpeg:" -ForegroundColor Yellow
    Write-Host "1. Télécharger depuis: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "2. Ou avec chocolatey: choco install ffmpeg" -ForegroundColor Yellow
    Write-Host "3. Ou avec winget: winget install FFmpeg" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ FFmpeg trouvé: $($ffmpegPath.Source)" -ForegroundColor Green
Write-Host ""

# Dossier source
$sourceDir = ".\public\gospel"
$outputDir = ".\public\gospel-128"

# Créer le dossier de sortie s'il n'existe pas
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
    Write-Host "📁 Dossier créé: $outputDir" -ForegroundColor Green
}

# Récupérer tous les fichiers MP3
$mp3Files = Get-ChildItem -Path $sourceDir -Filter "*.mp3" | Where-Object { $_.Name -notlike "*-128.mp3" }

if ($mp3Files.Count -eq 0) {
    Write-Host "⚠️  Aucun fichier MP3 trouvé dans $sourceDir" -ForegroundColor Yellow
    exit 0
}

Write-Host "📊 Fichiers à compresser: $($mp3Files.Count)" -ForegroundColor Cyan
Write-Host ""

$successCount = 0
$errorCount = 0
$totalSizeBefore = 0
$totalSizeAfter = 0

foreach ($file in $mp3Files) {
    $inputPath = $file.FullName
    $outputFileName = $file.BaseName + "-128.mp3"
    $outputPath = Join-Path $outputDir $outputFileName
    
    $sizeBefore = [math]::Round($file.Length / 1MB, 2)
    $totalSizeBefore += $file.Length
    
    Write-Host "🎵 $($file.Name) ($sizeBefore MB)" -ForegroundColor White
    
    try {
        # Compression avec FFmpeg
        # -i : fichier d'entrée
        # -b:a 128k : bitrate audio 128 kbps
        # -ar 44100 : sample rate 44.1 kHz
        # -ac 2 : stéréo (2 canaux)
        # -y : écraser si existe
        $ffmpegArgs = @(
            "-i", $inputPath,
            "-b:a", "128k",
            "-ar", "44100",
            "-ac", "2",
            "-y",
            $outputPath
        )
        
        $process = Start-Process -FilePath "ffmpeg" -ArgumentList $ffmpegArgs -NoNewWindow -Wait -PassThru
        
        if ($process.ExitCode -eq 0 -and (Test-Path $outputPath)) {
            $sizeAfter = [math]::Round((Get-Item $outputPath).Length / 1MB, 2)
            $totalSizeAfter += (Get-Item $outputPath).Length
            $reduction = [math]::Round((1 - $sizeAfter / $sizeBefore) * 100, 1)
            
            Write-Host "   ✅ Compressé: $sizeAfter MB (réduction: $reduction%)" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "   ❌ Erreur lors de la compression" -ForegroundColor Red
            $errorCount++
        }
    } catch {
        Write-Host "   ❌ Exception: $($_.Exception.Message)" -ForegroundColor Red
        $errorCount++
    }
    
    Write-Host ""
}

# Résumé
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "📊 RÉSUMÉ" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Réussis: $successCount" -ForegroundColor Green
Write-Host "❌ Erreurs: $errorCount" -ForegroundColor $(if ($errorCount -gt 0) { "Red" } else { "Gray" })
Write-Host ""

$totalBeforeMB = [math]::Round($totalSizeBefore / 1MB, 2)
$totalAfterMB = [math]::Round($totalSizeAfter / 1MB, 2)
$totalReduction = [math]::Round((1 - $totalSizeAfter / $totalSizeBefore) * 100, 1)
$savedMB = [math]::Round(($totalSizeBefore - $totalSizeAfter) / 1MB, 2)

Write-Host "📦 Taille totale avant: $totalBeforeMB MB" -ForegroundColor White
Write-Host "📦 Taille totale après: $totalAfterMB MB" -ForegroundColor Green
Write-Host "💾 Espace économisé: $savedMB MB ($totalReduction%)" -ForegroundColor Yellow
Write-Host ""
Write-Host "📁 Fichiers compressés dans: $outputDir" -ForegroundColor Cyan
Write-Host ""

if ($successCount -eq $mp3Files.Count) {
    Write-Host "🎉 Compression terminée avec succès!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Compression terminée avec des erreurs" -ForegroundColor Yellow
}
