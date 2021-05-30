module.exports = {
    title: 'Louis Adamian',
    markdown:{
        anchor:{
            permalink: false,
            permalinkBefore: true,
            permalinkSymbol: '#'

        }
    },
    extendMarkdown: md => {
        md.use(require('@centerforopenscience/markdown-it-imsize'))
    }
  }
