taskkill /F /IM openfin.exe & 
REG ADD "HKEY_CURRENT_USER\SOFTWARE\OpenFin\RVM\Settings" /v "DesktopOwnerSettings" /t REG_SZ /d "https://jsonblob.com/api/887706456791728128" /f