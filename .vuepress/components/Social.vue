<template>
    <div class="social-wrapper">
        <ul class="socials">
            <li><a href="https://www.linkedin.com/in/louieadamian/"><i class="far fa-linkedin" /> LINKEDIN</a> </li>
            <li><a href="https://github.com/LouieAdamian"><i class="far fa-github" /> GITHUB</a> </li>
            <li><a href="https://gitlab.com/LouieAdamian"><i class="far fa-gitlab" /> GITLAB</a> </li>
        </ul>
    </div>
</template>

<style lang="scss">
@import '../styles/style';
</style>

<style lang="scss" scoped>
    @import '../styles/variables';
    .socials ul li {
        display: inline;
        text-decoration: none;
    }
    .socials ul {
        list-style: none;
        flex-direction: row;
        display: block;
    }
    .socials li {
        list-style: none;
        display: inline-flex;
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