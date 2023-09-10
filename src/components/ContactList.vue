<template lang="">
  <section>
    <h2>Contact me</h2>
    <ul>
      <li v-for="(contact, index) in contacts" :key="index">
        <a :href="contact.link">
          <span :style="'background-image: url(' + require('@/assets/images/icons/'
           + contact.icon + '.svg') + ')'"></span>
          {{contact.text}}
        </a>
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
  li {
    margin-bottom: 15px;
  }

  a {
    display: flex;
    column-gap: 6px;
    align-items: center;

    &:hover > span {
      background-color: var(--contrast-color);
      transition: 0.3s ease;
    }
  }

  span {
    width: 32px;
    height: 32px;
    background-color: var(--accent-color);
    background-repeat: no-repeat;
    border-radius: 50%;
    background-size: 70%;
    background-position: center;
  }
</style>
