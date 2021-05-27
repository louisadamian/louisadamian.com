<template>
  <div class="theme-container">
    <div class="super-container">
      <Nav />
      <div class="content-container">
        <Content />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/style.scss';
</style>

<style scoped lang="scss">
@import '../styles/variables';
.theme-container {
  padding: 1%;
}
</style>
<script>
import Nav from '@theme/components/Nav'
import 'normalize.css'
import 'typeface-source-sans-pro'
export default {
  components: {
    Nav
  }
}
</script>
