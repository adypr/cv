<template lang="">
  <div class="work">
    <div class="picture">
      <img :src="require('@/assets/images/works/' + work.id + '.jpg')" alt="" class="image"/>
      <div class="links">
        <a :href="work.deploy" class="deploy">
          <svg class="icon" width="30" height="30">
            <use xlink:href="@/assets/images/icons/sprite-work.svg#deploy" >
              deploy link
            </use>
          </svg>
        </a>
        <a :href="work.code" class="code">
          <svg class="icon" width="30" height="30">
            <use xlink:href="@/assets/images/icons/sprite-work.svg#code" >
              code link
            </use>
          </svg>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="title">Title: {{work.title}}</div>
      <div class="task">Task: {{work.task}}</div>
      <div class="stack">Stack: {{work.stack}}</div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
  .work {
    width: 49%;
    display: flex;
    position: relative;
  }

  .work::before {
    position: absolute;
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    left: -69px;
    background-color: var(--secondary-color);
    border-radius: 50%;
  }

  .work::after {
    position: absolute;
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    left: -63px;
    top: 6px;
    background-color: var(--accent-color);
    border-radius: 50%;
  }
  .picture {
    position: relative;
    width: 30%;
  }

  .links {
    position: absolute;
    bottom: 0;
  }

  .image {
    width: 100%;
  }
</style>
