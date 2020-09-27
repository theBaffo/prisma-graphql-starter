const { objectType } = require('@nexus/schema')

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.title()
    t.model.content()
    t.model.published()
    t.model.author()
  },
})

module.exports = {
  Post,
}
