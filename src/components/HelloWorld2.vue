<template>
  <div class="hello">
    <h1 class="title">Vee Validate Observer</h1>
    <!-- 正常顯示區域 - 英文 -->
    <ValidationObserver v-slot="{ invalid, passes }">
      <form @submit.prevent="passes(submit)">
        <div class="label">Email</div>
        <TextFieldWithValidation rules="required" v-model="user.email" />
        <br />
        <div class="label">Password</div>
        <TextFieldWithValidation rules="required" v-model="user.pw" />
        <button class="submitBtn" :disabled="invalid">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import TextFieldWithValidation from "./TextFieldWithValidation";

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
      // No need to worry about form state
      // as this is only runs when the form is valid
      // 🐿 ship it
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
</style>
