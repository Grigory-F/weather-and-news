<template>
  <div v-bind:class="{ 'preloader--hide': !isLoading }" class="preloader">
      <p class="preloader__sign">Loading...</p>
  </div>
</template>

<script>
export default {
props: {
    isLoading: Boolean,
}
}
</script>

<style lang="scss">
.preloader {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #454545;
  z-index: 100;
  display: flex;
  transition: 1s ease;
  &--hide {
    left: 100%;
  }
  &__sign {
    font-size: 24px;
    margin: auto;
    color: white;
  }
}
</style>