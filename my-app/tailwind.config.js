module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}", // srcディレクトリにあるjs,jsx,ts,tsxを監視して軽量化してくれる
  ],
  ...
};
