<template>
<!-- <div class="fancybox">-->
<!--  <p>导入sass文件</p>-->
<!-- </div>-->
  <div class="blur-theme">
    <p>学习笔记--------》 STUDYNOTES.md</p>
    <p class="aside">
      嵌套导入
    </p>
  </div>
</template>

<script>
export default {
  name: "import-file"
};
</script>

<style scoped lang="scss">
@import "../common/import-file";
//默认变量值  !default
$fancybox-width: 400px !default;
.fancybox {
  background-color: #FFCC99;
  width: $fancybox-width;
}

//嵌套导入
//sass
.blur-theme {@import "../common/blue-theme";}
//css
.blur-theme {
  .aside {
    background: blue;
    color: white;
  }
}
</style>