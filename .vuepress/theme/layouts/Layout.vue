<template>
  <div class="theme-container">
    <div class="super-container">
      <Nav />
      <div class="content-container">
        <Content />
      </div> 
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss">
@import '../styles/style.scss';
</style>

<style scoped lang="scss">
@import '../styles/variables.scss';
.theme-container {
  padding: 2%;
  height:100%;
  padding-bottom: 2.5rem;
}
</style>
<script>
import Nav from '@theme/components/Nav'
import Footer from '@theme/components/Footer'
export default {
  components: {
    Nav, Footer
  }
}
</script>
