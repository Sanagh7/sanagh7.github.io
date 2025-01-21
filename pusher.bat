@echo off

git add .

git commit -m "samosa"

git pull origin main

call npm run build

git add .

git commit -m "aloo"

git push origin main