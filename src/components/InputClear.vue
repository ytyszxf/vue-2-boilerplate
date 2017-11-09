<template>
  <div class="item-after" v-if="value && value.length > 0">
    <button type="button" @click="handleClick()"><img :src="require('@/assets/sprite/remove.svg')" /></button>
  </div>
</template>

<script>
export default {
  name: 'inputClear',

  props: {
    value: {
      type: String,
      required: false,
    },
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
