@echo off

git add .

git commit -m "lalal"

git pull origin main

npm run build 

git push origin main