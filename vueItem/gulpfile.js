'use strict';
var gulp = require('gulp');

// 压缩css
var cssmin = require('gulp-cssmin');

//解析sass文件
var sass = require("gulp-sass");

//连接服务器
var connect = require('gulp-connect');

//gulp.task('sass', function () {
//return gulp.src('./sass/*.scss')
//  .pipe(sass().on('error', sass.logError))
//  .pipe(gulp.dest('./css'));
//});
// 
//gulp.task('sass:watch', function () {
//gulp.watch('./sass/**/*.scss', ['sass']);
//});

// sass转为css,然后合并css文件再输出
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
});

// 先执行监听，然后启动服务器，如果监听的文件发生改变，执行reload
gulp.task('myserver',['watcher'],function(){
       connect.server({
               name:'myserver', // 可忽略，不配置
               root:'./',
               port:8888,    //端口，默认：8080
               //host:'你的域名（写出了又要被百度删了，心很累！）',  //可忽略，默认值：localhost
               livereload:true // 是否自动重载，自然是true了，如果不想自动重载，就false。
       });
});
//添加gulp.watch()实时监听
gulp.task('watcher',function(){
    gulp.watch('./demo0723/*',['loadfiles']); // 需要手动运行：gulp  watcher 才会开始监视。
});
//给需要重载的文件加上connect.reload()控制
gulp.task('loadfiles',function(){
    	gulp.src('./demo0723/*')
    	.pipe(connect.reload());
});


