<template>
  <div class="login-page">
    <div class="login_container">
      <h1>旅梦后台登录</h1>
      <div class="wrap">
          <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="username"
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        prefix-icon="el-icon-lock"
        show-password
      ></el-input>
      <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
           if(this.username === 'admin' && this.password === '123456') {
               this.$router.push({path: '/home' ,query:{user: this.username}})
           }
        }
    }
};
</script>
    
<style>
.login-page {
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
}
.login_container {
  width: 300px;
  height: 260px;
  box-shadow: 0px 0px 5px #aaa;
  border-radius: 5px;
  text-align: center;
}
.wrap {
    padding: 10px 50px;
}
input {
    margin: 10px 0;
}
</style>