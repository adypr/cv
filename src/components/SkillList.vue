<template lang="">
  <section>
    <h2>Skills</h2>
    <div class="skills">
      <span v-for="(skill, index) in skills" :key="index">{{skill}}</span>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>

section {
  margin-bottom: 56px;;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;

}
span {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.01em;
}
</style>
