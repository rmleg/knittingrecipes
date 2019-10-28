#!/bin/bash

rm -r build/*
sass scss/custom.scss scss/custom.css
cp -r {images,index.html,scripts.js} build/
mkdir build/scss
cp scss/custom.css build/scss/ 
