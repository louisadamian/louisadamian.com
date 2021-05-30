<template>
  <div className="project-container">
    <Nav/>
    <div className="content-container">
      <router-link class="fas fa-angle-left">
        BACK
      </router-link>
      <content />
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

<style scoped>

</style>
