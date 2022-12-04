<template>
  <div class="container">
    <SideBar :skills="skills" :contacts="contacts"/>
    <main>
      <About />
      <WorkList :works="works"/>
      <EduList :educations="educations" />
    </main>

  </div>
</template>

<script>
import About from '@/components/About.vue';
import WorkList from '@/components/WorkList.vue';
import SideBar from '@/components/SideBar.vue';
import EduList from '@/components/EduList.vue';

import {
  works, skills, contacts, educations,
} from '@/base/content';

export default {
  components: {
    WorkList, SideBar, EduList, About,
  },
  data() {
    return {
      works,
      skills,
      contacts,
      educations,
    };
  },
};
</script>

<style scoped>
main {
  padding: 80px 64px 50px;
  background: url('@/assets/images/noise.png');
}
.container {
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
