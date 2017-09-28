var gulp     =    require('gulp'),
    deploy   =    require('gulp-deploy-git');
    // dist        = ,  // The distribution package that you'll be uploading to your server; delete it anytime
    config   =     require('../../gulpconfig').gitdeploy;


// gulp.task('deploy', function(){
  gulp.task('deploy', ['dist'], () => {
  return gulp.src('dist/ass-hub/**', { read: false })
    .pipe(deploy({
       repository: 'https://github.com/isaac-martin/health-recruit.git',
       message: 'build and push',
       verbose: true,
       prefix: 'dist/health-recruit',
      debug: true
    }))
})
