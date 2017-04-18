// 초기 데이터설정
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var open = require('gulp-open');
var include = require("gulp-include");
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');

// 작업경로
var devSrc = 'src';
var distSrc = 'dist';

// 동작하는 task들