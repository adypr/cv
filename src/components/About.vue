<template lang="">
  <section>
    <h2>About me</h2>
    <p>
      {{aboutContent}}
    </p>
  </section>
</template>
<script>
import { aboutContent } from '@/base/content';

export default {
  name: 'AboutMe',
  data: () => ({
    aboutContent,
  }),
};
</script>
<style scoped>
  section {
    padding-bottom: 48px;
    border-bottom: 1.5px solid;
    border-image: linear-gradient(90deg, rgba(247,235,218,1), rgba(247,235,218,0)) 20;
  }
</style>
