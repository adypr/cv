<template lang="">
  <div class="edu">
    <h3 class="title">{{education.title}}</h3>
    <h4 class="year">{{education.year}}</h4>
    <p class="course">Course: <a :href="education.link">{{education.course}}</a></p>
  </div>
</template>
<script>
export default {
  props: {
    education: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
  .edu {
    position: relative;
    margin-bottom: 40px;
  }
  .edu::before {
    position: absolute;
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    left: -69px;
    background-color: var(--secondary-color);
    border-radius: 50%;
  }

  .edu::after {
    position: absolute;
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    left: -63px;
    top: 6px;
    background-color: var(--contrast-color);
    border-radius: 50%;
  }

  .title {
    margin-bottom: 16px;
    position: relative;
  }

  .year {
    position: absolute;
    color: var(--secondary-color-dark);
    top: -3px;
    left: -116px;
    font-size: 16px;
  }

</style>
