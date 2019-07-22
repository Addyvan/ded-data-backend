import { stringArg, queryField } from "nexus";

const projects = queryField('projects', {
  type: 'Project',
  args: {
    id: stringArg()
  },
  resolve: (parent, args : any, ctx) => {
    if (args.id) {
      return ctx.prisma.projects({where: {id: args.id}});
    } else {
      return ctx.prisma.projects(args);
    }
  },
});

export default projects;