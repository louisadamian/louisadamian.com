<template>
    <div class="footer-container">
       <p class="footer"> © 2021 Louis Adamian under a </p>
       <a href="https://gitlab.com/LouieAdamian/louisadamian-com/-/blob/master/LICENSE"> GNU GPL v3.0 Licence</a>
    </div>
</template>
  
<style lang="scss">
@import '../styles/style';
</style>

<style lang="scss" scoped>
    @import '../styles/variables';
    .footer {
      display: inline;
    }
    .footer-container{
      vertical-align: bottom;
    }
</style>

<script>
export default {
    name: 'Social',
    components: {
    },
    data () {
        return {}
    }    
}
</script>