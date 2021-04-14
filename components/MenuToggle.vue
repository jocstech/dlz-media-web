<template>
  <div class="menu-toggle" @click="toggle">
    <div
      id="trigger"
      class="trigger"
      :class="$store.getters.mobileMenu ? 'on' : 'off'"
    >
      <svg width="50px" height="50px" viewBox="0 0 620 600">
        <path
          id="top"
          d="M190,182.6c0,0,248.6,0,271.2,0c226,0,113,361.3-22.6,225.8C348.2,318.1,190,160,190,160"
        />
        <path id="middle" d="M190,295.5h271.2" />
        <path
          id="bottom"
          d="M190,417.4c0,0,248.6,0,271.2,0c226,0,113-361.3-22.6-225.8C348.2,281.9,190,440,190,440"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuToggle',
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggle() {
      this.$store.commit('TOGGLE_MOBILE_MENU')
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-toggle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  .trigger {
    overflow: hidden;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    svg {
      width: 40px;
      height: 40px;
      position: relative;
      cursor: pointer;
      transform: translateZ(0);
      path {
        fill: none;
        transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
          stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
        stroke-width: 45px;
        stroke-linecap: round;
        stroke: #fff;
        stroke-dashoffset: 0px;

        &#bottom,
        &#top {
          stroke-dasharray: 280px 880px;
        }
        &#middle {
          stroke-dasharray: 300px 300px;
        }
      }
    }

    &.on svg path {
      &#top,
      &#bottom {
        stroke-dashoffset: -730px;
      }
      &#middle {
        stroke-dashoffset: -135px;
        stroke-dasharray: 1px 300px;
      }
    }
  }
}
</style>
