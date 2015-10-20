//require mobules
var gulp = require("gulp");
var sass = require("gulp-sass");


//styles
gulp.task("styles", function () {

	var src = gulp.src("sass/starter.styles.sass");
	src
		.pipe(sass())
		.pipe(gulp.dest("css"));
});


//watch
gulp.task("watch", function () {

	gulp.watch("sass/**/*.sass", ["styles"]);
});


//default task
gulp.task("default", ["styles", "watch"])
