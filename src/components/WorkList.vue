<template>
  <section>
    <h2>Expirience</h2>
  <transition-group name="slide" tag="div" appear class="list" >
    <WorkItem v-for="work in works" :key="work.id" :work="work"
     :style="{transitionDelay: work.id*0.1 + 's'}"/>
  </transition-group>
  </section>
</template>
<script>
import WorkItem from '@/components/WorkItem.vue';

export default {
  components: { WorkItem },
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
section {
  position: relative;
  margin-top: 56px;
  padding: 16px 0 16px 56px;
  padding-bottom: 55px;
  border-left: 2px solid;
  border-image: url('@/assets/images/line-works.png') 1 stretch;
}

h2::after {
  position: absolute;
  left: -21px;
  top: 14px;
  content: '';
  display: block;
  width: 40px;
  height: 40px;
  background: var(--accent-color) url('@/assets/images/icons/briefcase.svg') no-repeat center;
  border-radius: 50%;
}

h2::before {
  position: absolute;
  left: -34px;
  top: 0;
  content: '';
  display: block;
  width: 64px;
  height: 64px;
  border: 2px solid var(--secondary-color);
  border-radius: 50%;
  background-color: var(--primary-color);
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

.list {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 20px 0;
}
</style>
