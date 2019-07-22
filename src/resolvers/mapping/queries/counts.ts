import { stringArg, queryField } from "nexus";

const counts = queryField('counts', {
  type: 'Count',
  args: {
    id: stringArg()
  },
  resolve: async (parent, args : any, ctx) => {
    
    const peopleCount : Number = await ctx.prisma.personsConnection().aggregate().count();
    const projectsCount : Number = await ctx.prisma.projectsConnection().aggregate().count();
    const tagsCount : Number = await ctx.prisma.tagsConnection().aggregate().count();
    
    return {
      people: peopleCount,
      projects: projectsCount,
      tags: tagsCount
    }
  },
});

export default counts;