<template>

  <div class="login">
    <el-row>
      <el-col>
        <div class="content">
          <el-form>

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
        name: "Login"
    }
</script>

<style scoped>

</style>
