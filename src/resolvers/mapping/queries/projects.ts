import { stringArg, queryField } from "nexus";

const projects = queryField('projects', {
  type: 'Project',
  args: {
    id: stringArg()
  },
  resolve: (parent, args : any, ctx) => {
    if (args.id) {
      return ctx.mappingPrisma.projects({where: {id: args.id}});
    } else {
      return ctx.mappingPrisma.projects(args);
    }
  },
});

export default projects;