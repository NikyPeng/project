<template>
  <div class="login">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: 'Please input your username!' }] },
          ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
        <!-- <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, min: 6,max: 16,pattern: new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#\.])/g),message: 'Please input your Password!' }] },
          ]"
          type="password"
          placeholder="Password"
        > -->
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, min: 6,max: 16,message: 'Please input your Password!' }] },
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "Login",
  data() {
    return {
      form: this.$form.createForm(this, {userName: "", password: ""})
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    hasErrors(fieldsError) {
      return Object.keys(fieldsError).some(field => fieldsError[field]);
    },
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          let {userName,password} = values;
          this.$axios.post('/api/login',{
            username: userName,
            password
          }).then(res => {
            console.log("==Login -> res==", res, this.$router, this.$route)
            if(res.status === 200 && res.data){
              let {code, data} = res.data;
              data && data.token && this.$cache.set("auth-token", data.token);
              if(!code && data && data.token){
                this.$cache.set("auth-token", data.token);
                this.$router.go("/");
                return;
              }
            }
            this.$message.error("登录异常，请稍后再试");
          }).catch(err => {
            console.log("Login -> err", err)
            this.$message.error("登录失败，请稍后再试");
          })
        }
      });
    }
  }
})
</script>
<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background-color: cornflowerblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>