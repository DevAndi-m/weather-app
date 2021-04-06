# HOW TO USE GIT

Nese jemi duke perdorur nje pc te re, fillimisht duhet me konfiguru accountin, me ane te komandave:

    git config --global user.name "UsernameGITHUB"
    git config --global user.email "EmailGITHUB"

MOS HARRO: Krijoni repository te re!

E nisim projektin me ane te komandes:

    git init

I selektojme te gjitha filet me ane te komandes:

    git add -A

Ne qofte se doni me dergu vetem 1 file te catuar, atehere perdorni komanden:

    git add fileName.js

Nese deshironi me kontrollu gjendjen e file-ve qe jane editu ose jane editu(changed) perdoret komanda:

    git status

Pasi jemi gati me modifikim e dergojme gjendjen (fotografine) e projektit dhe mesazhin qe eshte modifiku:

    git commit -m "Mesazhi jone"

Lidhim projektin tone lokalisht me repoitorin ne GitHub, me ane te komandes:

    git add remote origin "Linku ne Git Hub"

Dergojme projektin me komanden:

    git push origin master

