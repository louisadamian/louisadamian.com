module.exports = {
    title: 'Louis Adamian',
    base: "/louisadamian.com/",
    markdown:{
        anchor:{
            permalink: false,
            permalinkBefore: true,
            permalinkSymbol: '#',
            externalIcon:false
        },
        links: {
            externalIcon: false
        }
    },
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': 'UA-179316996-1'
            
          }
        ]
      ],
    extendMarkdown: md => {
        md.use(require('@centerforopenscience/markdown-it-imsize'))
    },
    dest: 'public'
  }
