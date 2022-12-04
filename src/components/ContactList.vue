<template lang="">
  <section>
    <h2>Contact me</h2>
    <ul>
      <li v-for="(contact, index) in contacts" :key="index">
          <span :style="'background-image: url(' + require('@/assets/images/icons/'
           + contact.icon + '.svg') + ')'"></span>
            {{contact.text}}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  li {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  span {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background-color: var(--accent-color-light);
    background-repeat: no-repeat;
    border-radius: 50%;
    background-size: 70%;
    background-position: center;
  }
</style>
