<template>
  <ValidationProvider :rules="rules" v-slot="{ errors }">
    <TextField v-model="innerValue" :error="errors[0]" />
  </ValidationProvider>
</template>

<script>
import TextField from "./TextField";

export default {
  name: "TextFieldWithValidation",
  props: {
    rules: [String], // we need this
    value: null
  },
  components: {
    ValidationProvider,
    TextField
  },
  data: () => ({
    innerValue: null
  }),
  watch: {
    innerValue(val) {
      this.$emit("input", val);
    }
  }
};
</script>