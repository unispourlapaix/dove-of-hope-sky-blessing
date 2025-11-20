# 🎵 Compression Audio - Qualité Radio (Joint Stereo)
# Optimisation maximale pour le web avec qualité radio FM

param(
    [Parameter(HelpMessage="Bitrate CBR: 64, 80, 96 kbps")]
    [ValidateSet('64', '80', '96')]
    [string]$Bitrate = '80',
    
    [Parameter(HelpMessage="Utiliser VBR quality (2-4) au lieu de CBR")]
    [ValidateSet('2', '3', '4')]
    [string]$VBRQuality,
    
    [Parameter(HelpMessage="Fréquence d'échantillonnage: 44100 (standard) ou 48000 (haute)")]
    [ValidateSet('44100', '48000')]
    [string]$SampleRate = '44100',
    
    [switch]$ForceJointStereo,
    [switch]$HighpassFilter  # Filtre passe-haut pour enlever sub-bass inutile
)

# Configuration
$inputDir = "public/gospel"
$outputSuffix = if ($VBRQuality) { "vbr-q$VBRQuality-js" } else { "$Bitrate-js" }
$outputDir = "public/gospel-$outputSuffix"

# Couleurs
$color_header = 'Cyan'
$color_success = 'Green'
$color_info = 'Yellow'
$color_error = 'Red'
$color_stats = 'Magenta'

Write-Host "`n🎵 COMPRESSION AUDIO - QUALITÉ RADIO`n" -ForegroundColor $color_header
Write-Host "════════════════════════════════════════════════════════" -ForegroundColor $color_header

# Vérifier FFmpeg
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Erreur: FFmpeg n'est pas installé ou pas dans le PATH" -ForegroundColor $color_error
    Write-Host "   Installez FFmpeg: https://ffmpeg.org/download.html" -ForegroundColor $color_info
    exit 1
}

# Vérifier dossier source
if (-not (Test-Path $inputDir)) {
    Write-Host "❌ Erreur: Dossier source '$inputDir' introuvable" -ForegroundColor $color_error
    exit 1
}

# Créer dossier destination
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    Write-Host "✅ Dossier créé: $outputDir" -ForegroundColor $color_success
}

# Paramètres de compression
$compressionMode = if ($VBRQuality) { "VBR Quality $VBRQuality" } else { "$Bitrate kbps CBR" }
$stereoMode = if ($ForceJointStereo) { "Joint Stereo (forcé)" } else { "Joint Stereo (auto)" }

Write-Host "`n📋 Configuration:" -ForegroundColor $color_info
Write-Host "   Mode:              $compressionMode" -ForegroundColor White
Write-Host "   Stéréo:            $stereoMode" -ForegroundColor White
Write-Host "   Sample Rate:       $SampleRate Hz" -ForegroundColor White
Write-Host "   Filtre passe-haut: $(if($HighpassFilter){'Oui (20Hz)'}else{'Non'})" -ForegroundColor White
Write-Host "   Source:            $inputDir" -ForegroundColor White
Write-Host "   Destination:       $outputDir" -ForegroundColor White

# Récupérer tous les fichiers MP3
$files = Get-ChildItem -Path $inputDir -Filter *.mp3

if ($files.Count -eq 0) {
    Write-Host "`n⚠️  Aucun fichier MP3 trouvé dans $inputDir" -ForegroundColor $color_info
    exit 0
}

Write-Host "`n🎵 Fichiers à traiter: $($files.Count)" -ForegroundColor $color_header
Write-Host "════════════════════════════════════════════════════════`n" -ForegroundColor $color_header

# Statistiques
$totalFiles = $files.Count
$processedFiles = 0
$failedFiles = 0
$totalInputSize = 0
$totalOutputSize = 0
$startTime = Get-Date

# Traiter chaque fichier
foreach ($file in $files) {
    $processedFiles++
    $inputPath = $file.FullName
    $outputFileName = $file.Name -replace '\.mp3$', "-$outputSuffix.mp3"
    $outputPath = Join-Path $outputDir $outputFileName
    
    # Taille d'entrée
    $inputSizeMB = [math]::Round($file.Length / 1MB, 2)
    $totalInputSize += $file.Length
    
    Write-Host "[$processedFiles/$totalFiles] " -NoNewline -ForegroundColor $color_info
    Write-Host "$($file.Name) " -NoNewline -ForegroundColor White
    Write-Host "($inputSizeMB MB)" -ForegroundColor DarkGray
    
    # Construire les arguments FFmpeg
    $ffmpegArgs = @(
        "-i", $inputPath,
        "-codec:a", "libmp3lame"
    )
    
    # Mode compression: VBR ou CBR
    if ($VBRQuality) {
        # VBR Quality (2=~170-210 kbps, 3=~150-195 kbps, 4=~140-185 kbps)
        $ffmpegArgs += "-q:a", $VBRQuality
    } else {
        # CBR
        $ffmpegArgs += "-b:a", "${Bitrate}k"
    }
    
    # Joint Stereo
    if ($ForceJointStereo) {
        $ffmpegArgs += "-joint_stereo", "1"
    }
    # Sinon FFmpeg choisit automatiquement le meilleur mode stéréo
    
    # Autres paramètres
    $ffmpegArgs += "-ar", $SampleRate  # Sample rate
    $ffmpegArgs += "-ac", "2"          # Stéréo
    
    # Filtre passe-haut (enlève les fréquences < 20Hz qui prennent de la place)
    if ($HighpassFilter) {
        $ffmpegArgs += "-af", "highpass=f=20"
    }
    
    # Optimisations MP3
    $ffmpegArgs += "-compression_level", "2"  # Meilleure compression
    
    # Métadonnées et overwrite
    $ffmpegArgs += "-map_metadata", "0"  # Copier métadonnées
    $ffmpegArgs += "-id3v2_version", "3"  # ID3v2.3 (compatible)
    $ffmpegArgs += "-write_id3v1", "1"    # Écrire ID3v1 aussi
    $ffmpegArgs += "-y"                   # Overwrite
    $ffmpegArgs += $outputPath
    
    # Exécuter FFmpeg
    try {
        $process = Start-Process -FilePath "ffmpeg" `
                                 -ArgumentList $ffmpegArgs `
                                 -NoNewWindow `
                                 -Wait `
                                 -PassThru `
                                 -RedirectStandardError "$env:TEMP\ffmpeg_error.txt"
        
        if ($process.ExitCode -eq 0 -and (Test-Path $outputPath)) {
            $outputSizeMB = [math]::Round((Get-Item $outputPath).Length / 1MB, 2)
            $totalOutputSize += (Get-Item $outputPath).Length
            $reduction = [math]::Round((1 - $outputSizeMB / $inputSizeMB) * 100, 1)
            
            Write-Host "   ✅ " -NoNewline -ForegroundColor $color_success
            Write-Host "$outputSizeMB MB " -NoNewline -ForegroundColor $color_success
            Write-Host "(-$reduction%)" -ForegroundColor $color_stats
        } else {
            $failedFiles++
            Write-Host "   ❌ Échec de la compression" -ForegroundColor $color_error
            if (Test-Path "$env:TEMP\ffmpeg_error.txt") {
                $errorContent = Get-Content "$env:TEMP\ffmpeg_error.txt" -Raw
                Write-Host "   Erreur: $errorContent" -ForegroundColor $color_error
            }
        }
    } catch {
        $failedFiles++
        Write-Host "   ❌ Erreur: $($_.Exception.Message)" -ForegroundColor $color_error
    }
}

# Statistiques finales
$endTime = Get-Date
$duration = $endTime - $startTime
$totalInputSizeMB = [math]::Round($totalInputSize / 1MB, 2)
$totalOutputSizeMB = [math]::Round($totalOutputSize / 1MB, 2)
$totalSavedMB = [math]::Round($totalInputSizeMB - $totalOutputSizeMB, 2)
$totalReduction = [math]::Round((1 - $totalOutputSizeMB / $totalInputSizeMB) * 100, 1)

Write-Host "`n════════════════════════════════════════════════════════" -ForegroundColor $color_header
Write-Host "📊 RÉSUMÉ" -ForegroundColor $color_header
Write-Host "════════════════════════════════════════════════════════" -ForegroundColor $color_header

Write-Host "`n✅ Fichiers traités:   $($totalFiles - $failedFiles)/$totalFiles" -ForegroundColor $color_success
if ($failedFiles -gt 0) {
    Write-Host "❌ Échecs:             $failedFiles" -ForegroundColor $color_error
}

Write-Host "`n📦 Taille originale:   $totalInputSizeMB MB" -ForegroundColor White
Write-Host "📦 Taille compressée:  $totalOutputSizeMB MB" -ForegroundColor $color_success
Write-Host "💾 Espace économisé:   $totalSavedMB MB" -ForegroundColor $color_stats
Write-Host "📉 Réduction totale:   $totalReduction%" -ForegroundColor $color_stats

Write-Host "`n⏱️  Temps d'exécution:  $($duration.TotalSeconds.ToString('0.0'))s" -ForegroundColor $color_info
Write-Host "⚡ Vitesse moyenne:    $([math]::Round($duration.TotalSeconds / $totalFiles, 1))s par fichier" -ForegroundColor $color_info

Write-Host "`n📁 Dossier de sortie:  $outputDir" -ForegroundColor $color_header

# Comparaison qualité/taille
Write-Host "`n════════════════════════════════════════════════════════" -ForegroundColor $color_header
Write-Host "🎯 QUALITÉ ATTENDUE" -ForegroundColor $color_header
Write-Host "════════════════════════════════════════════════════════" -ForegroundColor $color_header

if ($VBRQuality) {
    $qualityMap = @{
        '2' = @{ bitrate='~170-210 kbps'; quality='Excellente (quasi transparente)'; use='Haute qualité web' }
        '3' = @{ bitrate='~150-195 kbps'; quality='Très bonne (transparente pour la plupart)'; use='Qualité web standard' }
        '4' = @{ bitrate='~140-185 kbps'; quality='Bonne (très peu perceptible)'; use='Streaming optimisé' }
    }
    $q = $qualityMap[$VBRQuality]
    Write-Host "`n🎵 Mode VBR Quality $VBRQuality" -ForegroundColor $color_info
    Write-Host "   Bitrate variable: $($q.bitrate)" -ForegroundColor White
    Write-Host "   Qualité:          $($q.quality)" -ForegroundColor White
    Write-Host "   Usage:            $($q.use)" -ForegroundColor White
} else {
    $qualityMap = @{
        '64'  = @{ quality='Acceptable'; use='Voix/podcasts, mobile 3G'; perception='Perte notable hautes fréquences' }
        '80'  = @{ quality='Bonne'; use='Radio FM, musique web mobile'; perception='Excellente pour gospel/voix' }
        '96'  = @{ quality='Très bonne'; use='Streaming web standard'; perception='Quasi transparente pour musique vocale' }
    }
    $q = $qualityMap[$Bitrate]
    Write-Host "`n🎵 Mode CBR $Bitrate kbps + Joint Stereo" -ForegroundColor $color_info
    Write-Host "   Qualité:          $($q.quality)" -ForegroundColor White
    Write-Host "   Perception:       $($q.perception)" -ForegroundColor White
    Write-Host "   Usage:            $($q.use)" -ForegroundColor White
}

Write-Host "`n💡 Joint Stereo:" -ForegroundColor $color_info
Write-Host "   - Encode différences entre canaux (vs full stereo)" -ForegroundColor White
Write-Host "   - Économise 20-30% de bitrate pour qualité équivalente" -ForegroundColor White
Write-Host "   - Idéal pour musique centrée (voix, gospel)" -ForegroundColor White
Write-Host "   - Image stéréo préservée" -ForegroundColor White

if ($HighpassFilter) {
    Write-Host "`n🔧 Filtre passe-haut actif:" -ForegroundColor $color_info
    Write-Host "   - Supprime fréquences < 20Hz (inaudibles)" -ForegroundColor White
    Write-Host "   - Économise 1-2% de bitrate supplémentaire" -ForegroundColor White
    Write-Host "   - Aucune perte perceptible" -ForegroundColor White
}

Write-Host "`n✅ Compression terminée avec succès !`n" -ForegroundColor $color_success
