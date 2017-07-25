# Boilerplate Webpack with ES2015 & SASS

Notable packages include:
- [babel-loader](https://github.com/babel/babel-loader)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- [normalize.css](https://github.com/necolas/normalize.css)

# Usage

**Install using:**
```ssh
npm install
```

**Build:**

```ssh
npm run build-prod
npm run build-dev
```

Running either will generate files into a folder called `dist`.

**Dev Server**
Runs a [local server](https://webpack.js.org/configuration/dev-server) on port 8080.
```ssh
npm run dev
npm run dev -- --open
```

**Watch**
Watches for file changes and builds files in development mode.
```ssh
npm run watch
```

**noramalize.css**
Normalize isn't used by default. Import in the styles.scss file using `@import '~normalize.css';` or uninstall if not needed: `npm uninstall -S normalize.css`.

# TODO
Config file.