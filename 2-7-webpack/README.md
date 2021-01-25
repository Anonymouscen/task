> 问题：导入的字体没有生效

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

目录
![目录图片](https://img-blog.csdnimg.cn/20210125231505513.jpg#pic_center)

network中没有发送请求
![avatar](https://img-blog.csdnimg.cn/20210125232150807.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTEwMjI3MA==,size_16,color_FFFFFF,t_70)
