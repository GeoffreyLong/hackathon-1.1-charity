require! {
    child_process: ps 
    colors
}
require! {
    'gulp'
    'gulp-clean': clean
    'gulp-livescript': livescript
    'gulp-markdown': markdown
    'gulp-mocha': mocha
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
    .pipe livescript {+bare}
    .pipe gulp.dest \build  

gulp.task \doc ->
    gulp.src \doc/*.md
    .pipe markdown!
    .pipe gulp.dest \build/res

gulp.task \test <[ build-test ]> ->
    gulp.src \build/test/*
    .pipe mocha!
    .on 'error' -> process.exit 1
    .on 'end' -> process.exit!

gulp.task 'build-test' <[ build ]> ->
    gulp.src [\test/*.ls \test/**/*.ls]
    .pipe livescript {+bare}
    .pipe gulp.dest \build/test

gulp.task \clean ->
    gulp.src \build {-read}
    .pipe clean!
