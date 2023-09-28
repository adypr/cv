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
<style lang="scss" scoped>

section {
  margin-bottom: 56px;

  @media (max-width: $m) {
    margin-bottom: 40px;
  }

}
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;

}

.codewars__link {
  display: flex;
  justify-content: space-between;
  background-color: #303133;

  border-color: #E8E8E8;
  border-top:34px solid #FFF; border-left:17px solid #FFCC00; border-bottom:34px solid #FFF;
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

  @media (max-width: $xl) {
      font-size: 18px;
    }

  @media (max-width: $l) {
    font-size: 16px;
    padding: 0.5vw 1vw;
  }
}
</style>
