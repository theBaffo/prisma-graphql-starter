const { objectType } = require('@nexus/schema')

const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id()
    t.model.bio()
    t.model.user()
  },
})

module.exports = {
  Profile,
}
