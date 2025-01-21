@echo off

git add .

git commit -m "samosa"

git pull origin main

cmd /k "npm run build"

git add .

git commit -m "aloo"

git push origin main