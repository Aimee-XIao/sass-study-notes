<template>
 <div >
   <el-row class="tac">
     <el-col :span="3">
       <el-menu
         default-active="2"
         class="el-menu-vertical-demo"
         @open="handleOpen"
         @close="handleClose"
         :router="true"
         background-color="#FF9999"
         text-color="#fff"
         active-text-color="#FFCC99">
         <template v-for="item in menu">
           <el-menu-item :index="item.path"  :key="item.path">
             <i class="el-icon-setting"></i>
             <span slot="title">{{item.name}}</span>
           </el-menu-item>
         </template>
       </el-menu>
     </el-col>
     <el-col :span="21">
       <router-view />
     </el-col>
   </el-row>
 </div>
</template>


<script>
export default {
  data() {
    return {
      menu: [
        {
          path:'/nested-css-rules',
          name:'嵌套CSS 规则'
        },
        {
          path:'/import-file',
          name:'导入sass文件'
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>

/deep/.el-menu {
  height: 100vh;
  .el-menu-item, .el-submenu__title {
   text-align: left;
  }
}

</style>