### 1.使用变量
```
1-1. 变量声明
eg: $theme-color: #f90;
eg: $link-color: blue;
a {
color: $link_color;
}
编译后
a {
color: blue;
}
$link-color和$link_color其实指向的是同一个变量。
```

### 2.嵌套CSS 规则
```angular2html
2-1. 父选择器的标识符&
eg:
<div class="article">
  <a href=""> 我是a链接</a>
</div>
<style lang="scss">
  .article {
    a {
      color: $base-font-t-color;
      &:hover {
         color: $base-font-d-color;
       }
    }
  }
</style>

2-2. 嵌套属性
规则：把属性名从中划线-的地方断开，在根属性后边加一个冒号：，紧跟一个{}，把子属性部分写在{}中
eg:
<style>
  .border {
    width: 50px;
    height: 50px;
    border: {
      style: solid;   // border-style: solid;
      color: #42b983;  // border-color: #42b983;
      width: 2px;   // border-width: 2px;
    }
  }
  -------------------------------------------------------------------
  .border {
    width: 50px;
    height: 50px;
    border: 1px solid #42b983 { //border: 1px solid #42b983;
      left: 0px;  //border-left: 0px;       
      right: 0px;  //border-right: 0px;
    }
  }
  
</style>
```

### 3. 导入sass文件
```angular2html
@import规则: 允许在一个css文件中导入其他css文件
  css: 只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢。
  sass: @import在生成css文件时就把相关文件导入进来，这也意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求。

（1）使用sass部分文件
sass局部文件的文件名是以下划线开头，这样，sass就不会在编译时单独编译这个文件输出css，而只是把这个文件用作导入

（2）默认变量值
 !default标签：用于变量，含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值

eg:
<div class="fancybox">
  <p>导入sass文件</p>
</div>
<style lang="scss" scoped>
  @import "../common/import-file";  //引入局部文件
  $fancybox-width: 400px !default;  // .fancybox div的宽度为200px
  $fancybox-width: 400px;  // .fancybox div的宽度为400px, 局部文件设置的值无效
  .fancybox {
    background-color: #FFCC99;
    width: $fancybox-width;
  }
</style>

<!--局部sass文件 _import-file.scss-->
$fancybox-width: 200px;
-------------------------------------------------------------------

（3）嵌套导入
跟原生的css不同，sass允许@import命令写在css规则内。
这种导入方式下，生成对应的css文件时，局部文件会被直接插入到css规则内导入它的地方。
eg:
<div class="blur-theme">
  <p class="aside">
    嵌套导入
  </p>
</div>
<style lang="scss" scoped>
  /*sass*/
  .blur-theme {@import "../common/blue-theme";}
  /*css*/
  .blur-theme {
    .aside {
      background: blue;
      color: white;
    }
  }
</style>

<!--局部sass文件 _blue-theme.scss-->
.aside {
  background: blue;
  color: white;
}
-------------------------------------------------------------------

(4) 原生的css导入
sass兼容原生的css，所以它也支持原生的css@import。
通常在sass中使用@import时，sass会尝试找到对应的sass文件并导入进来，但在下列三种情况下会生成原生的css@import，会造成浏览器解析时额外下载：
· 被导入文件的名字以.css结尾；
· 被导入文件的名字是一个URL地址
· 被导入文件的名字是css是url()值
```

### 4. 静默注释

