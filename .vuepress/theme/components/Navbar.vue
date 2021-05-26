<template>
    <div class="nav">
            <router-link to:="/">
                <h1 class="sitename">
                    Louie Adamian
                </h1>
            </router-link>
        <ul class="nav links">
            <li>
                <router-link class="portfolio" :to="/portfolio/">
                    <h2>
                        Portfolio
                    </h2>
                </router-link>
            </li>
            <li>
                <router-link class="blog" :to="/blog/">
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
        margin: 10% 10% 0;
        flex-direction: row;
        a {
            text-decoration: none;
        }
        @media(max-width: 700px) {
            flex-direction: column;
        }
    }
    h2, .sitename {
        font-weight: 400;
    }
    .sitename {

    }
</style>
