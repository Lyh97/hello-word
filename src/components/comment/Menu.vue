<template>
    <div id="leftMenu">
        <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2" v-on:click="toOtherPage('HelloWorld')">
                <i class="el-icon-menu"></i>
                <span slot="title">Helloword</span>
            </el-menu-item>
            <el-menu-item index="3" v-on:click="toOtherPage('SlotTest')">
                <i class="el-icon-document"></i>
                <span slot="title">SlotTest</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5" :class="isCollapse==true?'el-icon-arrow-right':'el-icon-arrow-left'" @click="isCollapse = !isCollapse">
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        screenWidth: document.body.clientWidth
      };
    },
    methods: {
        toOtherPage(page) {
            this.$router.push({
                name: page,
                params: {"p": "Hunter"}
            })
        }
    },
    mounted() {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
    },
    watch: {
        screenWidth(val) {
            let that = this
            setTimeout(function(){
                if(Number.parseInt(val) > 760) {
                    that.isCollapse = false
                } else {
                    that.isCollapse = true
                }
            },400)
        }
    }
  }
</script>
<style>
    @import './Menu.less';
</style>
