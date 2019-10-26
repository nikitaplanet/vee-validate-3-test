<template>
  <div>
    <input type="text" v-model="innerValue" :value="value" />
    <span v-show="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: ["value", "error"],
  data: () => ({
    innerValue: ""
  }),
  watch: {
    innerValue(val) {
      this.$emit("input", val);
    }
  }
};
</script>