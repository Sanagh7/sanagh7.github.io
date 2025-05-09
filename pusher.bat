@echo off

git add .

git commit -m "lalalal"

git pull origin main

call npm run build

git add .

git commit -m "lalalal"

git push origin main