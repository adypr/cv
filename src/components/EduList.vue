<template lang="">
  <section>
    <h2>Education</h2>
    <transition-group name="slide" tag="div" appear class="list" >
      <EduItem v-for="education in educations" :key="education.id" :education="education"
     :style="{transitionDelay: education.id*0.1 + 's'}"/>
    </transition-group>
  </section>
</template>
<script>
import EduItem from '@/components/EduItem.vue';

export default {
  components: { EduItem },
  props: {
    educations: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  position: relative;
  padding-left: 56px;
  border-left: 2px solid;
  border-image: url('@/assets/images/line-edu.png') 1 stretch;

  @media (max-width: $l) {
    padding-left: 0;
    padding-top: 12px;
    border: none;
  }
}

h2 {
  position: relative;
  margin-bottom: 34px;
  top: -13px;

  @media (max-width: $l) {
    position: static;
    padding-left: 52px;
  }
}

h2:before {
  position: absolute;
  left: -91px;
  top: -17px;
  content: '';
  display: block;
  width: 64px;
  height: 64px;
  border: 2px solid var(--secondary-color);
  border-radius: 50%;
  background-color: var(--primary-color);

  @media (max-width: $l) {
    display: none;
  }
}

h2::after {
  position: absolute;
  left: -77px;
  top: -2px;
  content: '';
  display: block;
  width: 40px;
  height: 40px;
  background: var(--contrast-color) url('@/assets/images/icons/edu.svg') no-repeat center;
  border-radius: 50%;

  @media (max-width: $l) {
    left: 0;
    top: 6px;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
