<template>
  <div class="blog-container">
    <h2>
      Blog
    </h2>
    <div v-for="post in posts" :key="post.frontmatter.title">
      <router-link class="post-link" :to="post.path">
        <div class="blog-post">
          <h2 class="post-title">
            <router-link :to="post.path">
              {{ post.frontmatter.title }}
            </router-link>
          </h2>
          <p class="post-date">
            {{ formatDate(post.frontmatter.date) }}
          </p>
          <p>{{ post.frontmatter.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../theme/styles/variables';

.post-title {
  margin: 0 0;
}

.blog-post {
  padding: 20px 0;
  margin: 20px $left-pad;
  box-sizing: border-box;
  &:active {
    opacity: 0.3;
  }
}

.post-link {
  text-decoration: none;
  color: unset;
}

.post-date {
  color: $off-black;
  margin: 0 $left-pad;
  font-family: $heading;
  font-weight: 300;
  font-size: 14pt;
}
</style>

<script>
import moment from 'moment'

export default {
  computed: {
    posts () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index && !x.frontmatter.draft)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMM Do, YYYY')
    }
  }
}
</script>
