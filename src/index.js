const { GraphQLServer } = require('graphql-yoga')
const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema')
const { makeSchema } = require('@nexus/schema')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')

const prisma = new PrismaClient()

new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusSchemaPrisma({
      experimentalCRUD: true
    })],
    outputs: {
      schema: __dirname + '/../schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
  }),
  middlewares: [permissions],
  context: (request) => {
    return {
      ...request,
      prisma,
    }
  },
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
  ),
)
