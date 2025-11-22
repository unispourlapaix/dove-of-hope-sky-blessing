@echo off
echo ========================================
echo  Dove of Hope : Sky Blessing - Dev Server
echo ========================================
echo.

REM Arrêter tous les serveurs Python sur le port 8000
echo [1/3] Arrêt des serveurs existants sur le port 8000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8000 ^| findstr LISTENING') do (
    echo Arrêt du processus %%a...
    taskkill /F /PID %%a >nul 2>&1
)
echo.

REM Attendre un peu pour que le port se libère
timeout /t 1 /nobreak >nul

REM Lancer le serveur HTTP Python
echo [2/3] Démarrage du serveur HTTP sur http://localhost:8000
echo.
echo [3/3] Ouvrez votre navigateur à l'adresse :
echo.
echo     VERSION page (github) :
echo     http://localhost:8000/index.html
echo.
echo     VERSION local (copy to index.htlm) :
echo     http://localhost:8000/dove-of-hope-sky-blessing.html
echo.
echo Appuyez sur Ctrl+C pour arrêter le serveur
echo ========================================
echo.

python -m http.server 8000
