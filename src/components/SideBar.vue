<template lang="">
  <aside>
    <div class="picture">
      <img src="@/assets/images/image.jpg" alt="" class="image">
      <div class="heading">
        <h1 class="title">Aida Yasin</h1>
        <p class="description">Fronend developer</p>
      </div>
    </div>
    <SkillList :skills="skills" />
    <ContactList :contacts="contacts" />
  </aside>
</template>
<script>
import SkillList from '@/components/SkillList.vue';
import ContactList from '@/components/ContactList.vue';

export default {
  components: { SkillList, ContactList },
  props: {
    skills: {
      type: Array,
      required: true,
    },
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
  aside {
    width: 32%;
    flex-shrink: 0;
    padding: 50px 45px 50px 64px;
    background: linear-gradient(270deg, var(--first-gradient-color)
                 0.02%, var(--second-gradient-color) 100%);
  }

  .picture {
    position: relative;
    margin-bottom: 64px;
  }

  img {
    width: 100%;
  }

  .heading {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: calc(100% - 48px);
    margin: 24px;
    padding: 14px 15px;
    background: linear-gradient(148.05deg, rgba(71, 79, 87, 0.576)
     0%, rgba(247, 235, 218, 0.128) 100%);
    backdrop-filter: blur(20px);
    mix-blend-mode:difference;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.24));
    border-radius: 32px;
    background-image: url("@/assets/images/noise.png");

  }

  .title {
    font-weight: 800;
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.12em;
    margin-bottom: 10px;
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
  }

  .description {
    position: relative;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
  }
  .description::before {
    display: block;
    bottom: 50%;
    content: '';
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(247,235,218,1) 0%, rgba(247,235,218,0) 30%,
                                       rgba(247,235,218,0) 70%, rgba(247,235,218,1) 100%);
    border-radius: 50%;
    margin-bottom: 12px;
  }

  .description::after {
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    top: -8px;
    content: '</>';
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 800;
  }
</style>
