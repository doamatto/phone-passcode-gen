import 'dart:io';
import 'package:sass/sass.dart';

void main() {
  var result = compile(
    'style.scss',
    style: OutputStyle.compressed,
    verbose: true,
  );
  new File('docs/style.css').writeAsString(result);
  // Build SCSS
}
