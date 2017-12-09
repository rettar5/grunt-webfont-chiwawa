module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"), // package.jsonの読み込み
    webfont: {
      icons: {
        src: "chiwawa_svgs/*.svg", // 変換元SVGファイルの指定
        dest: "dist/fonts", // 生成したフォントの出力先
        destCss: "dist/styles", // 生成したフォントに対応するスタイルシートの出力先
        options: {
          font: "chiwawa_fonts", // 生成したフォントのファイル名
          engine: "node", // フォントの変換エンジン
          stylesheet: "css", // スタイルシートの形式
          htmlDemo: true, // 生成したフォントを確認できるデモページの有無
          htmlDemoFilename: "chiwawa_fonts", // デモページのファイル名
          types: "ttf,eot,woff", // 出力するフォントの形式
          templateOptions: {
            baseClass: "chiwawa_fonts", // 生成するフォントの共通クラス
            classPrefix: "chiwawa_fonts_" // 生成するフォントのクラス名のプレフィックス
          }
        }
      }
    },
  });
  grunt.loadNpmTasks("grunt-webfont"); // プラグインの読み込み
  grunt.registerTask("default", ["webfont"]); // デフォルトのタスクの設定
};