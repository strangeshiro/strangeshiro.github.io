#!/bin/sh
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves.
set -e
cd "$(dirname "$0")"
npx astro build
touch dist/.nojekyll
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="Miya" -c user.email="24203907+strangeshiro@users.noreply.github.com" commit -q -m "Deploy $(date +%Y-%m-%d)"
git -c credential.helper= -c credential.helper='!gh auth git-credential' push -f https://github.com/strangeshiro/strangeshiro.github.io.git gh-pages
rm -rf .git
