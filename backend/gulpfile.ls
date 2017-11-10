require! [\gulp \gulp-livescript]

clean = require \gulp-clean
ps = require \child_process

gulp.task \run [\build \start]


gulp.task \start ->
    proc = ps.spawn 'node' ['build/app.js']

    proc.stdout.on \data (data) ->
        console.log "stdout: #data"

    proc.stderr.on \data (data) ->
        console.log "stderr: #data"

    proc.on \close (code) ->
        console.log "child process exited with code #code"

gulp.task \build ->
    gulp.src \src/app.ls
    .pipe gulp-livescript bare: true
    .pipe gulp.dest \build

gulp.task \clean ->
    gulp.src \build read: false
    .pipe clean()
