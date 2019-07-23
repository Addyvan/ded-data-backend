import { stringArg, extendType } from "nexus";

const projects = extendType({
  type: "Query",
  definition(t) {
    t.list.field('projects', {
      type: 'Project',
      args: {
        id: stringArg({required: false})
      },
      resolve: async (parent, args : any, ctx) => {
        if (args.id) {
          return ctx.mappingPrisma.projects({where: {id: args.id}});
        } else {
          return ctx.mappingPrisma.projects(args);
        }
      },
    });
  }
});

export default projects;