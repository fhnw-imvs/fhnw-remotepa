echo off

echo "starting release %1"
git flow release start %1

echo "bump version"
cd frontend &
call npm --no-git-tag-version version %1
cd ..
echo %1 > version.txt

echo "commit and push to git"
git add *
git commit -m "bump version to %1"
git flow release publish
