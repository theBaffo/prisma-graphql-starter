const { idArg, queryType, stringArg } = require('@nexus/schema')
const { getUserId } = require('../utils')

const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.prisma.user.findOne({
          where: {
            id: userId,
          },
        })
      },
    })

    t.crud.user()
    t.crud.users({
      filtering: true,
      ordering: true,
      pagination: true,
    })
  },
})

module.exports = {
  Query,
}
