<template>
    <!-- Hello world 04-->
    <div id="login-body">
        <div class="login-title">大风狗公司登录页面</div>
        <div class="login-form">
            <div class="login-form-title">用户登录/UserLogin</div>
            <div class="login-userInfo" >
                <div class="login-form-username">
                    <el-input :suffix-icon="userNameIcon" v-model="userName" />
                </div>
                <div class="login-form-password">
                    <el-input :suffix-icon="passwordIcon" :show-password="true" v-model="password" @focus="focusPassowrd()" @blur="blurPassword()" />
                </div>
                <div class="login-form-rememberMe" size="mini" text-color="#000">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                </div>
            </div>
            <div class="login-form-submit">
                <el-button type="primary" @click="submitLoginInfo()">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userName: "",
                userNameIcon: "el-icon-user-solid",
                password: "",
                passwordIcon: "el-icon-key",
                checked: true
            }
        },
        methods: {
            focusPassowrd() {
                this.passwordIcon = ""
            },
            blurPassword() {
                this.passwordIcon = "el-icon-key";
            },
            submitLoginInfo() {
                this.axios({
                    methods: "get",
                    url: "selectUserByUserName",
                }).then((res)=> {
                    var userInfo = {
                        userName: res.data.name,
                        userPassword: res.data.id
                    }
                    this.$store.commit("setUserInfo", userInfo);
                })
            }
        }
    }
</script>
<style lang="less" type="text/less">
    @import './Login.less';
</style>