<template>
  <div class="chevron-scroll" @click="scrollToSection">
    <div class="chevron-scroll__chevron"></div>
    <div class="chevron-scroll__chevron"></div>
    <div class="chevron-scroll__chevron"></div>
    <span class="chevron-scroll__text"><slot /></span>
  </div>
</template>

<script setup>
const props = defineProps({
  targetId: {
    type: String,
    required: true,
  },
});

const scrollToSection = () => {
  const targetElement = document.getElementById(props.targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped lang="scss">
.chevron-scroll {
  position: absolute;
  z-index: 1;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;

  &__chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;

    &:first-child {
      animation: move 3s ease-out 1s infinite;
    }

    &:nth-child(2) {
      animation: move 3s ease-out 2s infinite;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      width: 50%;
      background: $white;
    }

    &::before {
      left: 0;
      transform: skew(0deg, 30deg);
    }

    &::after {
      right: 0;
      width: 50%;
      transform: skew(0deg, -30deg);
    }
  }

  &__text {
    display: block;
    margin-top: 150px;
    font-size: 1.3rem;
    color: $picton-blue;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.25;
    animation: pulse 2s linear alternate infinite;
  }
}
</style>
