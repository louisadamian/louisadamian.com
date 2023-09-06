<template>
  <div class="profiles-container">
    <nav class="profiles">
      <ul>
       <li><a href="https://social.treehouse.systems/@louisadamian"><font-awesome-icon :icon="['fab', 'mastodon']" /></a></li>
        <li><a href="https://www.linkedin.com/in/louisadamian/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
        <li><a href="https://github.com/louisadamian"><font-awesome-icon :icon="['fab', 'github']" /></a></li>
        <li><a href="https://gitlab.com/louisadamian"><font-awesome-icon :icon="['fab', 'gitlab']" /></a></li>
        <li><a href="mailto:louis@adamian.net"><font-awesome-icon :icon="['far', 'envelope']" /></a></li>

      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import '../theme/styles/variables';

.profiles ul {
  padding: 0;
  list-style: none;
  display: block;
  flex-direction: row;
  line-height: 50px;
}
.profiles-container {
  padding-top: 20px;
  
}
.profiles ul li {
  display: inline;
  font-size: 48pt;
}

.profiles ul li a {
  white-space: nowrap;
  text-decoration: none;
  padding: 0 3px;
  font-weight: 500;
  svg { margin-right: 3px; }
}
</style>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEnvelope as fasEnvelop } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, fasEnvelop, faGithub, faInstagram, faTwitter, faLinkedin, faGitlab)

export default {
  name: 'Profiles',
  components: {
    'font-awesome-icon': FontAwesomeIcon

  },
  data () {
    return {}
  }
}
</script>
