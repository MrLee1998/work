<template>
  <div class="login">
    <!-- 头部 -->
    <SimpleHeader :name="type == 'login' ? '登录' : '注册'"></SimpleHeader>
    <img
      class="logo"
      src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
      alt=""
    />
    <!-- 登录 -->
    <div v-if="type == 'login'" class="login-body login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
          v-model="verify"
          type="verify"
          name="验证码"
          label="验证码"
          placeholder="填写验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
        <!-- vant 语法格式 -->
          <template #button>
            <vueImgVerify ref="verifyRef" />
          </template>
        </van-field>
        <div style="margin: 16px">
          <div class="link-register" @click="toggle('register')">注册账号</div>
          <van-button round block type="info" native-type="submit"
          color="#1baeae"  >登录</van-button
          >
        </div>
      </van-form>
    </div>
    <!-- 注册 -->
    <div v-else class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="rusername"
          name="rusername"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="rpassword"
          type="password"
          name="rpassword"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
          v-model="verify"
          type="verify"
          name="验证码"
          label="验证码"
          placeholder="填写验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
        <!-- vant 语法格式 -->
          <template #button>
            <vueImgVerify ref="verifyRef" />
          </template>
        </van-field>
        <div style="margin: 16px">
          <div class="link-login" @click="toggle('login')">登陆账号</div>
          <van-button round block type="info" native-type="submit"
          color="#1baeae"  >注册</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import SimpleHeader from "../components/SimpleHeader";
import { reactive, toRefs, ref } from  'vue'
import vueImgVerify from '../components/VueImgVerify'
import { Toast } from 'vant';
import { register, login } from '../service/user'
import md5 from 'js-md5'
import { setLocal } from '../common/js/util'
// import router from '../router'
import {useRouter} from 'vue-router'
export default {
  components: {
    SimpleHeader,
    vueImgVerify
  },
  setup() {
    const router = useRouter() 
    const verifyRef = ref(null)
    const state = reactive({
      username: '',
      password: '',
      verify: '',
      type: 'login',
      rusername: '',
      rpassword: '',
      imgCode: ''
    })
    const toggle = (v) => {
      state.type = v
      state.verify = ''
    }
    const onSubmit = async(values) => {
      console.log(verifyRef.value.imgCode); // 通过ref.value可以取到setup函数返回的值
      state.imgCode = verifyRef.value.imgCode || ''
      if(state.verify.toLowerCase() !==  state.imgCode.toLowerCase()) {
        Toast.fail('验证码错误!')
        return
      }
      if(state.type === 'login') {
        const { data } = await login({
          "loginName": values.username,
          "passwordMd5": md5(values.password)
        })
        // token 保存到本地
        setLocal('token', data)
        router.push('/home')
        
      } else {
        console.log(values);
        await register({
          "loginName": values.rusername,
          "password": values.rpassword
        })
        Toast.success('注册成功')
        state.type = 'login'
        state.verify = ''
      }
    }
    return {
      ...toRefs(state),
      verifyRef,
      toggle,
      onSubmit
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  .login-body {
    padding: 0 20px;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .verify-bar-area {
    margin-top: 24px;
    .verify-left-bar {
      border-color: #1baeae;
    }
    .verify-move-block {
      background-color: #1baeae;
      color: #fff;
    }
  }
  .verify {
    > div {
      width: 100%;
    }
    display: flex;
    justify-content: center;
    .cerify-code-panel {
      margin-top: 16px;
    }
    .verify-code {
      width: 40% !important;
      float: left !important;
    }
    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;
      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }
      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>
