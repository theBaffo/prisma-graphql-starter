const { rule, shield } = require('graphql-shield')
const { getUserId } = require('../utils')

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
}

const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
  },
  Mutation: {
    createOnePost: rules.isAuthenticatedUser,
    updateOnePost: rules.isAuthenticatedUser,
    deleteOnePost: rules.isAuthenticatedUser,
    createOneProfile: rules.isAuthenticatedUser,
    updateOneProfile: rules.isAuthenticatedUser,
    deleteOneProfile: rules.isAuthenticatedUser,
  },
}, {
  debug: true,
})

module.exports = {
  permissions,
}
