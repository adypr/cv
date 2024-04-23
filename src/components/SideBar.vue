<template lang="">
  <aside>
    <div class="picture">
      <img src="@/assets/images/image.jpg" alt="" class="image">
      <div class="heading">
        <h1 class="title">Aida Yasin</h1>
        <p class="description">Web developer</p>
      </div>
    </div>
    <div class="content">
      <SkillList :skills="skills" />
      <ContactList :contacts="contacts" />
    </div>
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
<style lang="scss" scoped>
  aside {
    width: 32%;
    flex-shrink: 0;
    padding: 50px 45px 50px 64px;
    background: linear-gradient(270deg, var(--first-gradient-color)
                 0.02%, var(--second-gradient-color) 100%);
    @media (max-width: $xxl) {
      padding: 3vw 2.2vw;
    }

    @media (max-width: $m) {
      width: 100%;
      display: flex;
      gap: 16px;
      padding: 4vw 3.7vw 2.5vw;
    }

    @media (max-width: $s) {
      display: block;
    }
  }

  img {
    max-height: 150px;
    border-radius: 50%;

    @media (max-width: $m) {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .picture {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 64px;
    padding: 15px;
    flex-shrink: 0;
    background: url("@/assets/images/bg-image.jpg") no-repeat;
    background-size: cover;

    @media (max-width: $m) {
      margin-bottom: 32px;
    }
  }

  .heading {
    text-align: center;
    padding: 2px 14px 10px;
    background: linear-gradient(148.05deg, rgba(71, 79, 87, 0.576)
     0%, rgba(247, 235, 218, 0.128) 100%);
    backdrop-filter: blur(20px);
    mix-blend-mode: difference;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.24));
    border-radius: 25px;
    background-image: url("@/assets/images/noise.png");

    @media (max-width: $l) {
      padding: 1.3vw;
    }

    @media (max-width: $m) {
      border-radius: 20px;
    }

    @media (max-width: $s) {
      padding: 4vw;
    }
  }

  .title {
    font-weight: 800;
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.12em;
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);

    @media (max-width: $xl) {
      font-size: 28px;
    }

    @media (max-width: $l) {
      font-size: 24px;
      line-height: 23px;
      margin-bottom: 10px;
    }
  }

  .description {
    position: relative;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

    @media (max-width: $xl) {
      font-size: 18px;
    }

    @media (max-width: $l) {
      font-size: 16px;
      line-height: 15px;
    }
  }
</style>
