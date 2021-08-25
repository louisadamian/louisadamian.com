<template>
  <div class="portfolio-container">
    <div v-for="post in posts" :key="post.frontmatter.title" class="project-tile">
      <router-link class="project-link" :to="post.path">
        <img v-if="post.frontmatter.img" :src="getImgUrl(post.frontmatter.img)" alt="post.frontmatter.title">
        <h3 class="project-name">
          <router-link :to="post.path">
            {{ post.frontmatter.title }}
          </router-link>
        </h3>
<!--        </router-link>-->
<!--        <p>{{ post.frontmatter.description }}</p>-->
        </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../theme/styles/variables';
.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
}
.project-tile {
  padding: 0;
  margin: 20px $left-pad;
  box-sizing: border-box;
  width: 300px;
  // height: 350px;
  h2, p { margin: 5px 0; }
  h2 {
    font-size: 20px;
    height: 30px;
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
  }
  vertical-align: bottom;
}
.project-name {
  text-align: center;
  vertical-align: bottom;
  width: 100%
  
}
a {
  text-decoration: none;
}
.post-link {
  text-decoration: none;
  color: unset;
}
.tags {
color: $off-black;
 font-size: 12px;
}
img {
  width: 300px;
  height: auto;
}
</style>

<script>
export default {
  computed: {
    posts () {
      return this.$site.pages
          .filter(x => x.path.startsWith('/portfolio/') && !x.frontmatter.portfolio_index)
          .sort(
              (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          )
    }
  },
  methods: {
    getImgUrl (pic) {
      if (pic.startsWith('/uploads/')) return pic
      return require('../../portfolio/img/' + pic)
    }
  }
}
</script>
