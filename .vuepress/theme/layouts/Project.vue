<template>
  <div class="project-container">
    <Nav/>
    <div class="content-container">
      <router-link to="./portfolio/">
        <i class="fas fa-angle-left">BACK</i>
      </router-link>
      <img :src="frontmatter.img" :alt="frontmatter.title" />
      <Content />
    </div>
  </div>
</template>
<script>
import Nav from '@theme/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import '../styles/style.scss';
</style>
<style scoped lang="scss">
@import '../styles/variables.scss';

</style>
