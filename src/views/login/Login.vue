<template>

  <div class="login">
    <el-row>
      <el-col>
        <div class="content">
          <el-form v-loading="false" :element-loading-text="'正在登录中...'" :rules="rule_data">

            <el-form-item prop="username">
              <el-input type="text" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input type="password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

  </div>


</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        data: {
          username: '',
          password: ''
        },

        rule_data: {
          username: [{
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入用户名'))
              } else {
                if (/^[a-zA-Z0-9_-]{1,16}$/.test(value)) {
                  callback()
                } else {
                  callback(new Error('用户名至少6位,由大小写字母和数字,-,_组成'))
                }
              }
            },
            trigger: 'blur'
          }],
        }

      }

    }
  }
</script>

<style scoped>

</style>
