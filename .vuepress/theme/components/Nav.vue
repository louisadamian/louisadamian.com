<template>
    <div class="nav">
            <router-link to="/">
                <h1 class="site-name">
                    Louis Adamian
                </h1>
            </router-link>
        <ul class="nav-links">
            <li>
              <router-link class="portfolio" to="/portfolio/">
                <h2>
                  Portfolio
                </h2>
              </router-link>
            </li>
            <li>
              <router-link class="blog" to="/blog/">
                <h2>
                  Blog
                </h2>
              </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/variables';
    .nav {
        display: flex;
        flex-direction: row;
        a {
            text-decoration: none;
        }
        @media(max-width: 700px) {
            flex-direction: column;
        }
    }
    h2, .site-name {
        font-weight: 600;
    }
    .sitename {

    }
    .site-title {
      border: 5px solid transparent;
      font-size: 32px;
      padding: 20px;
      text-align: center;
      color: white;
      text-decoration: none;
      box-sizing: border-box;
      &:active {
        opacity: 0.7;
        padding: 0;
        border: 0;
        margin: 0;
      }
      @media (max-width: 700px) { display: inline-flex; }
      @media (max-width: 500px) { margin: 0 $left-pad; }
    }

    .nav-links {
      margin: 0;
      display: flex;
      flex-direction: row;
      list-style-type: none;
      padding: 12px;
      align-items: center;
      flex: 1;
      flex-wrap: wrap;
      @media (max-width: 500px) {
        padding: 0 12px;
      }

      &:active {
        margin: 0;
        padding: 12px;
      }

      li {
        display: inline-flex;
        height: 30px;
        padding: 18px 0;
        vertical-align: bottom;
        a, h2 {
          color: $off-black;
          position: relative;
          display: inline-flex;
          font-size: 28px;
          @media (max-width: 500px) {
            font-size: 20px;
          }
          margin: 0 5px;

          &.router-link-active {
            h2 {
              margin: 0 5px;
              font-weight: 700;
            }
          }
        }
      }
    }

</style>
