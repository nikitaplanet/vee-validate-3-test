<template>
  <div class="hello">
    <h1 class="title">Vee-Validate 3.0 驗證表單送出+中文化</h1>
    <div class="label">電子郵件</div>
    <!-- Render a form -->
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit">
      <ValidationProvider
        name="Email"
        rules="required|email"
        v-slot="{ valid, errors }"
        ref="emailField"
      >
        <input class="textField" v-model="user.email" type="text" placeholder="請輸入 Email..." />
        <span class="errorText">{{ errors[0] }}</span>
      </ValidationProvider>
      <br />
      <div class="label">密碼</div>
      <ValidationProvider name="密碼" rules="required|min:3" v-slot="{ errors }">
        <input class="textField" v-model="user.pw" type="password" placeholder="請輸入密碼..." />
        <span class="errorText">{{ errors[0] }}</span>
      </ValidationProvider>
      <br />
      <div class="label">確認密碼</div>
      <ValidationProvider name="確認密碼" rules="required|min:3|confirmed:密碼" v-slot="{ errors }">
        <input class="textField" type="password" v-model="user.pwConfirm" placeholder="再輸入一次密碼..." />
        <span class="errorText">{{ errors[0] }}</span>
      </ValidationProvider>
      <button class="submitBtn" :class="{button__unactive:invalid}" :disabled="invalid">Submit</button>
    </ValidationObserver>
    <br />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        email: "",
        pw: "",
        pwConfirm: ""
      }
    };
  },
  methods: {
    submit() {
      const isValid = this.$refs.observer.validate();
      if (!isValid) {
        // ABORT!!
        console.log("Unabled");
      } else {
        alert("驗證成功，繼續下一步");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
input:focus {
  outline: none;
}

.hello {
  width: 500px;
  margin: auto;
}

.title {
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  padding: 20px 0;
}

.label {
  width: 100%;
  text-align: left;
  font-weight: bold;
}

.remarkText {
}
.textField {
  width: 100%;
  border: none;
  height: 35px;
  border-bottom: 1px solid;
  margin-top: 5px;
}

.errorText {
  width: 100%;
  text-align: left;
  display: block;
  font-size: 12px;
  margin-top: 8px;
  color: red;
}

.submitBtn {
  border: none;
  background-color: black;
  color: white;
  font-weight: bold;
  width: 100%;
  padding: 12px 30px;
  border-radius: 5px;
  margin-top: 25px;
  display: block;
}

.button__unactive {
  background-color: gray;
}
</style>
