<template>
    <div class="footer-container">
       <p class="footer"> © 2021 Louis Adamian under a </p>
       <a class="footer" href="https://gitlab.com/louisadamian/louisadamian.com/-/blob/master/LICENSE"> GNU GPL v3.0 Licence</a>
    </div>
</template>
  
<style lang="scss">
@import '../styles/style';
</style>

<style scoped lang="scss">
@import '../styles/variables';
.footer {
  display: inline;
}
.footer-container{
  // position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
p, body, .footer, .footer-container{
  font-size:12pt;
  font-weight: 200;
  color: #555555;
}   
</style>

<script>
export default {
    name: 'Footer',
    components: {
    },
    data () {
        return {}
    }    
}
</script>