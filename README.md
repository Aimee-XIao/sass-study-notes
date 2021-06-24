# sass-study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### How to use sass:
    1. install:  node-sass and sass-loader 
                 npm install --save-dev node-sass
                 npm install --save-dev sass-loader
    2. Use it directly in components where sass is needed: 
       eg: 
          <style lang = "scss" scoped>
            $myRed:#ff0;
            .top{
               color:$myRed;
            }
          </style>

```
Tips: If there are many sass variables, you can create a sass file separately
      Reference method:
      Reference in the component: @import 'Path of SASS file'
      Reference in the main.js:  @import 'Path of SASS file'(Sass variables are global variables; For global use)
```
