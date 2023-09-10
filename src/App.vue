<template>
  <div class="container">
    <SideBar :skills="skills" :contacts="contacts"/>
    <main>
      <About />
      <WorkList :works="works" :otherWorks="otherWorks"/>
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
  works, otherWorks, skills, contacts, educations,
} from '@/base/content';

export default {
  components: {
    WorkList, SideBar, EduList, About,
  },
  data() {
    return {
      works,
      otherWorks,
      skills,
      contacts,
      educations,
    };
  },
};
</script>

<style lang="scss">
main {
  padding: 80px 64px 50px;
  background: url('@/assets/images/noise.png');

  @media (max-width: $xl) {
    padding: 4vw 3.7vw 2.5vw;
  }

}

div, p {
  @media (max-width: $l) {
    font-size: 14px;
  }
}

h2 {
  @media (max-width: $l) {
      font-size: 120px;
    }
}

h3 {
  @media (max-width: $l) {
      font-size: 16px;
    }
}

.container {
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: $m) {
      display: block;
  }

}
</style>
