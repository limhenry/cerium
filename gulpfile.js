var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


gulp.task('serve', function(){
  // Run a local server to depurate
     browserSync.init({
         server: {
             baseDir: "public"
         }
     });

     gulp.watch(["public/*","public/data/*", "public/src/*"]).on("change", reload);
});
