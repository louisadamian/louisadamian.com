module.exports = {
    title: 'Louis Adamian',
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
    extendMarkdown: md => {
        md.use(require('@centerforopenscience/markdown-it-imsize'))
    },
    dest: 'public'
  }
