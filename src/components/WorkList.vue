<template>
  <section>
    <h2>Expirience</h2>
  <transition-group name="slide" tag="div" appear class="list" >
    <WorkItem v-for="work in works" :key="work.id" :work="work"
     :style="{transitionDelay: work.id*0.1 + 's'}"/>
  </transition-group>
  <details>
    <summary>More projects</summary>
      <p>
        <transition-group name="oslide" tag="div" appear class="list" >
          <WorkItem v-for="work in otherWorks" :key="work.id" :work="work"
          :style="{transitionDelay: work.id*0.1 + 's'}"/>
        </transition-group>
    </p>
  </details>
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
    otherWorks: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  position: relative;
  margin-top: 56px;
  margin-bottom: 56px;
  padding: 16px 0 16px 56px;
  border-left: 2px solid;
  border-image: url('@/assets/images/line-works.png') 1 stretch;

  @media (max-width: $l) {
    padding: 3vw 0;
    margin-top: 3vw;
    margin-bottom: 35px;
    border: none;
  }
}

h2 {
  @media (max-width: $l) {
    padding-left: 52px;
  }

  @media (max-width: $m) {
    padding-left: 0;
  }
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

  @media (max-width: $l) {
    top: 20px;
    left: 0;
  }

  @media (max-width: $m) {
    display: none;
  }
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

  @media (max-width: $l) {
    display: none;
  }
}

summary {
  color: var(--accent-color);
  background: linear-gradient(270deg, var(--first-gradient-color)
                 0.02%, var(--second-gradient-color) 100%);
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  list-style-type: none;
  transition: 0.3s ease;

  &:hover {
    color: var(--contrast-color);
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

.list {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 20px 0;
}
</style>
