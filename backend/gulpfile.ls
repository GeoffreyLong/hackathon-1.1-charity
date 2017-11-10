require! {
    child_process: ps
    colors
    gulp
    'gulp-clean': clean
    'gulp-livescript': livescript
    'gulp-markdown': markdown
}

gulp.task \run <[ start ]>

gulp.task \start <[ build ]> ->
    proc = ps.spawn 'node' ['build/app.js']

    proc.stdout.on \data (data) ->
        console.log "#data".green

    proc.stderr.on \data (data) ->
        console.log "#data".red

gulp.task \build <[ doc ]> ->
    gulp.src [\src/*.ls \src/**/*.ls]
    .pipe livescript bare: true
    .pipe gulp.dest \build

gulp.task \doc ->
    gulp.src \doc/*.md
    .pipe markdown!
    .pipe gulp.dest \build/res

gulp.task \clean ->
    gulp.src \build read: false
    .pipe clean()
