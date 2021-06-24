<template>
  <div class="home">
    <div class="article">
      <p>选择器嵌套</p>
      <dl>
        <dt>1</dt>
        <dt>2</dt>
        <dt>3</dt>
        <dt>4</dt>
        <dd>a</dd>
        <dd>b</dd>
        <dd>c</dd>
      </dl>
      <hr>
      <p>嵌套属性</p>
      <div class="border">
        边框属性
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
@import "../common/base";
.home {
  width: 400px;
  height: 260px;
  //sass  嵌套css规则

  //选择器的嵌套
  //sass
  .article {
    dl > {
      dt { color: $base-font-d-color }
      dd { color: $base-font-t-color }
    }
  }

  //css
  //.article dl > dt { color: $base-font-d-color }
  //.article dl > dd { color: $base-font-t-color }

  //嵌套属性
  //sass
  //.border {
  //  width: 50px;
  //  height: 50px;
  //  border: {
  //    style: solid;
  //    color: #42b983;
  //    width: 2px;
  //  }
  //}

  .border {
    width: 50px;
    height: 50px;
    margin: 20px;
    border: 1px solid #42b983 {
      left: 0px;
      right: 0px;
    }
  }

  //css
 //.border {
 //  width: 50px;
 //  height: 50px;
 //  border: 2px solid  #42b983;
 //}

  .border {
    width: 50px;
    height: 50px;
    margin: 20px;
    border: 1px solid #42b983;
    border-left: 0px;
    border-right: 0px;
  }
}



</style>
