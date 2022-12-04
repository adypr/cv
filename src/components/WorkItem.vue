<template lang="">
  <div class="work">
    <div class="picture">
      <img :src="require('@/assets/images/works/' + work.id + '.jpg')"
          alt="screenshot" class="image"/>
      <div class="links">
        <a :href="work.deploy" class="deploy" title="deploy">
          <svg class="icon" width="30" height="30">
            <use xlink:href="@/assets/images/icons/sprite-work.svg#deploy" >
              deploy link
            </use>
          </svg>
        </a>
        <a :href="work.code" class="code" title="code">
          <svg class="icon" width="30" height="30">
            <use xlink:href="@/assets/images/icons/sprite-work.svg#code" >
              code link
            </use>
          </svg>
        </a>
      </div>
    </div>
    <div class="content">
      <h3 class="title">{{work.title}}</h3>
      <div class="task">{{work.task}}</div>
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
<style lang="scss" scoped>
  .work {
    display: flex;
    position: relative;
    gap: 16px;

    &:hover .picture .image {
      filter: brightness(40%);
    }
  }

  .work:hover .picture .links {
  opacity: 1;
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
    width: 240px;
    flex-shrink: 0;
  }

  .links {
    transition: 0.3s ease;
    position: absolute;
    top: 0;
    opacity: 0;
    display: flex;
    gap: 8px;
    padding: 8px;
  }

  .icon {
    fill: var(--secondary-color);
    stroke: var(--secondary-color);
  }
  .icon:hover {
    fill: var(--accent-color-light);
    stroke: var(--accent-color-light);
  }

  .image {
    transition: 0.3s ease;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
