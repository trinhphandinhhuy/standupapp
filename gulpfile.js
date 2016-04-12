var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

//using gulp to restart the server everytime something change
gulp.task('default', function () {
  nodemon({
    script: './bin/www',
    ext: 'js html',
    env: {
      PORT: 8000
    },
    ignore: ['./node_modules/**']
  }).on('restart', function(){
    console.log('Restarting');
  });
});
