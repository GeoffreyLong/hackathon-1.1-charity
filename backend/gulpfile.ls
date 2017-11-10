require! {
    child_process: ps
    colors
    gulp
    'gulp-clean': clean
    'gulp-livescript'
}

gulp.task \run <[ build start ]>

gulp.task \start ->
    proc = ps.spawn 'node' ['build/app.js']

    proc.stdout.on \data (data) ->
        console.log "#data".green

    proc.stderr.on \data (data) ->
        console.log "#data".red

gulp.task \build ->
    gulp.src [\src/*.ls \src/**/*.ls]
    .pipe gulp-livescript bare: true
    .pipe gulp.dest \build

gulp.task \clean ->
    gulp.src \build read: false
    .pipe clean()
