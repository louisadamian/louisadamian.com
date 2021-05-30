<template>
  <div class="work-experience-container">
    <div v-for="job in jobs" :key="job.frontmatter.name" class="work-experience">
      <img v-if="job.frontmatter.img" :src="getImgUrl(job.frontmatter.img)" :alt="job.frontmatter.name">
      <p class="date-location">
        {{formatDate(job.frontmatter.start)}} - {{formatDate(job.frontmatter.end)}}, {{job.frontmatter.location}}
      </p>
      <p class="description">
        {{job.frontmatter.description}}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    jobs () {
      return this.$site.pages
          .filter(x => x.path.startsWith('/resume/') && !x.frontmatter.resume)
          .sort(
              (a, b) => new Date(b.frontmatter.end) - new Date(a.frontmatter.end)
          )
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMM YYYY')
    },
    getImgUrl (pic) {
      if (pic.startsWith('/uploads/')) return pic
      return require('../../resume/img/' + pic)
    }
  }
}
</script>

<style lang="scss">
@import "../theme/styles/style";
</style>
<style scoped lang="scss">
@import "../theme/styles/variables";
img {
  width: 20vw;
}
</style>
