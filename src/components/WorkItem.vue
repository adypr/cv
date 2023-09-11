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
    <h3 class="title">{{work.title}}</h3>
    <div class="stack">Stack: {{work.stack}}</div>
    <div class="task">{{work.task}}</div>
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
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: "picture title"
          "picture stack"
          "picture task";
    position: relative;
    gap: 5px 16px;

    @media (max-width: $xl) {
      grid-template-columns: 180px auto;
      grid-template-rows: 20px auto;
      grid-template-areas: "picture title"
                            "picture stack"
                            "task task";
    }

    @media (max-width: $s) {
      grid-template-columns: 155px auto;
    }

    @media (max-width: 360px) {
      grid-template-rows: auto;
    }

    @media (max-width: $xs) {
      grid-template-columns: auto;
      grid-template-areas: "title"
                            "picture"
                            "stack"
                            "task";
    }

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

    @media (max-width: $l) {
      display: none;
    }
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

    @media (max-width: $l) {
      display: none;
    }
  }
  .picture {
    position: relative;
    width: 240px;
    grid-area: picture;

    @media (max-width: $xl) {
      width: 180px;
    }
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
    fill: var(--accent-color);
    stroke: var(--accent-color);
    transition: 0.3s ease;
  }
  .icon:hover {
    fill: var(--contrast-color);
    stroke: var(--contrast-color);
  }

  .image {
    transition: 0.3s ease;
    width: 100%;

    @media (max-width: $s) {
      width: 90%;
    }

  }

  .title {
    grid-area: title;
  }

  .stack {
    grid-area: stack;
  }

  .task {
    grid-area: task;
  }
</style>
