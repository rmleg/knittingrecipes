#!/bin/bash

rm -r build/socks/*
sass scss/custom.scss scss/custom.css
cp -r {images,index.html,scripts.js} build/socks/
mkdir build/socks/scss
cp scss/custom.css build/socks/scss/ 
