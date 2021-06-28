<template>
<!-- <div class="fancybox">-->
<!--  <p>导入sass文件</p>-->
<!-- </div>-->
  <div class="blur-theme">
    <p>学习笔记--------》 STUDYNOTES.md</p>
    <p class="aside">
      嵌套导入
    </p>

    <p>静默注释</p>
    <div class="silentNotes">

    </div>
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

.silentNotes {
  width: 100px;
  height: 20px;  // sass注释，不会出现在生成的css文件中
  background-color: #9a7272; /* 这种注释会出现在生成的css文件中 */
}
</style>