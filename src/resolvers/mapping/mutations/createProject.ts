import { stringArg, mutationField } from "nexus";

const createProject = mutationField('createProject', {
  type: 'Project',
  args: {
    name: stringArg(),
    description: stringArg()
  },
  resolve: (_parent, { name, description }, ctx) => {
    console.log("CREATING PROJECT");
    return ctx.prisma.createProject({
      name,
      description
    })
  },
});

export default createProject;