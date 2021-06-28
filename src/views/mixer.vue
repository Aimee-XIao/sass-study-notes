<template>
<div>
  <p>sass混合器的用法</p>
  <br>
  <div class="circle"> </div>
  <br>
  <p>混合器传参</p>
  <a href="">混合器传参</a>
</div>
</template>

<script>
export default {
  name: "mixer"
};
</script>

<style scoped lang="scss">
//@mixin rounded {
//  border-radius: 10px;
//  -webkit-border-radius: 10px;
//  -moz-border-radius: 10px;
//}
//  .circle {
//    width: 50px;
//    height: 50px;
//    border: 1px solid #FFCC99;
//    @include rounded;
//  }
@mixin link-color($normal, $hover) {
  color: $normal;
  &:hover {
    color: $hover;
  }
}
a {
  @include link-color(
    $normal: red,
    $hover: green,
)
}
</style>