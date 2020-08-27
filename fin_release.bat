echo off

echo "finishing release"
git flow release finish -m "finished release "

echo "bump version"
git checkout develop
cd frontend &
call npm --no-git-tag-version version %1
cd ..
echo %1 > version.txt

echo "commit and push to git"
git add *
git commit -m "bump version to %1"
git push origin master
git push origin develop
git push origin --tags
