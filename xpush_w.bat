@echo off
setlocal enabledelayedexpansion

set hour=%time:~0,2%
set hour=%hour: =0%
set min=%time:~3,2%
set p2=vue4core_"%DATE:~2,2%%DATE:~5,2%%DATE:~8,2%_%hour%%min%".7z

git push --all "S:\_CRYPT (FS)\REPO\Learn\vue4cire.git" 

C:
cd C:\_TEMP\temp\vue4core
del *.7z

git clone --bare C:\REPO\Learn\vue4core
"C:\Program Files\7-Zip\7z.exe" a -sdel !p2!