webpack.config.js
```javascript
module: {
  rules: [{
    test: /\.(sass|scss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }, {
    test: /\.(woff|woff2|ttf|otf|eto)/,
    use: 'file-loader'
  }]
}
```

index.scss
```css
@font-face {
  font-family: 'powerline';
  src: url('./Sauce\ Code\ Powerline\ Light.otf');
  font-weight: 600;
  font-style: normal;
}

.code {
  font-size: 16px;
  color: #333;
  font-family: 'powerline';
}
```
