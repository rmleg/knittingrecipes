# Knitting Recipes

This is a vanilla JavaScript rewrite of my Angular 1.x [Sock Knitter's Notebook](https://github.com/rmleg/sock-knitters-notebook) app.

Available at [https://knittingrecipes.com](knittingrecipes.com).

## Developing
Create feature branches checked out from `dev`. Submit pull requests to `dev`.

## Building
Navigate to the root directory. Run `./build.sh` to compile Sass files and update the 'build' directory.

## Deploying to knittingrecipes.com
Push to `master`. Netlify will automatically redeploy when `master` is updated using the files in the 'build' directory.
