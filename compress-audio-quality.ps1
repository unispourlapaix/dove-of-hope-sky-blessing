# Script de compression audio avec options de qualité
# Offre plusieurs niveaux de compression

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet('96', '112', '128')]
    [string]$Bitrate = '96',
    
    [Parameter(Mandatory=$false)]
    [switch]$VBR,
    
    [Parameter(Mandatory=$false)]
    [switch]$Mono
)

Write-Host "🎵 Compression Audio Avancée" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Vérifier FFmpeg
$ffmpegPath = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpegPath) {
    Write-Host "❌ FFmpeg non trouvé" -ForegroundColor Red
    exit 1
}

Write-Host "✅ FFmpeg: $($ffmpegPath.Source)" -ForegroundColor Green
Write-Host ""

# Configuration
Write-Host "📋 Configuration:" -ForegroundColor Yellow
if ($VBR) {
    Write-Host "   Mode: VBR (Variable Bitrate) - Qualité optimale" -ForegroundColor White
    Write-Host "   Qualité: V2 (~170-210 kbps)" -ForegroundColor White
    $outputSuffix = "-vbr"
} else {
    Write-Host "   Mode: CBR (Constant Bitrate)" -ForegroundColor White
    Write-Host "   Bitrate: $Bitrate kbps" -ForegroundColor White
    $outputSuffix = "-$Bitrate"
}

if ($Mono) {
    Write-Host "   Canaux: Mono (économie maximale)" -ForegroundColor White
    $channels = "1"
    $outputSuffix += "-mono"
} else {
    Write-Host "   Canaux: Stéréo" -ForegroundColor White
    $channels = "2"
}
Write-Host ""

$sourceDir = ".\public\gospel"
$outputDir = ".\public\gospel$outputSuffix"

# Créer dossier de sortie
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
    Write-Host "📁 Dossier créé: $outputDir" -ForegroundColor Green
}

# Récupérer fichiers MP3
$mp3Files = Get-ChildItem -Path $sourceDir -Filter "*.mp3" | Where-Object { 
    $_.Name -notlike "*-128.mp3" -and 
    $_.Name -notlike "*-96.mp3" -and
    $_.Name -notlike "*-112.mp3" -and
    $_.Name -notlike "*-vbr.mp3" -and
    $_.Name -notlike "*-mono.mp3"
}

if ($mp3Files.Count -eq 0) {
    Write-Host "⚠️  Aucun fichier MP3 trouvé" -ForegroundColor Yellow
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
    $outputFileName = $file.BaseName + "$outputSuffix.mp3"
    $outputPath = Join-Path $outputDir $outputFileName
    
    $sizeBefore = [math]::Round($file.Length / 1MB, 2)
    $totalSizeBefore += $file.Length
    
    Write-Host "🎵 $($file.Name) ($sizeBefore MB)" -ForegroundColor White
    
    try {
        if ($VBR) {
            # VBR Mode - Qualité optimale avec taille réduite
            # -q:a 2 = VBR qualité 2 (très bonne, ~170-210 kbps)
            # 0 = meilleure qualité (245 kbps), 9 = plus basse (65 kbps)
            $ffmpegArgs = @(
                "-i", $inputPath,
                "-codec:a", "libmp3lame",
                "-q:a", "2",
                "-ar", "44100",
                "-ac", $channels,
                "-y",
                $outputPath
            )
        } else {
            # CBR Mode - Bitrate constant
            $ffmpegArgs = @(
                "-i", $inputPath,
                "-b:a", "${Bitrate}k",
                "-ar", "44100",
                "-ac", $channels,
                "-y",
                $outputPath
            )
        }
        
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
Write-Host "════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "📊 RÉSUMÉ" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════════" -ForegroundColor Cyan
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

Write-Host ""
Write-Host "💡 Conseil Qualité:" -ForegroundColor Yellow
if ($VBR) {
    Write-Host "   VBR offre le meilleur rapport qualité/taille" -ForegroundColor White
} else {
    Write-Host "   Pour le web, 96 kbps stéréo est optimal pour musique" -ForegroundColor White
    Write-Host "   Pour voix seule, 64 kbps mono suffit" -ForegroundColor White
}
