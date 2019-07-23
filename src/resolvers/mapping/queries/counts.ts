import { queryField } from "nexus";

const counts = queryField('counts', {
  type: 'Count',
  resolve: async (parent, args : any, ctx) => {
    
    const peopleCount : Number = await ctx.mappingPrisma.personsConnection().aggregate().count();
    const projectsCount : Number = await ctx.mappingPrisma.projectsConnection().aggregate().count();
    const tagsCount : Number = await ctx.mappingPrisma.tagsConnection().aggregate().count();
    
    return {
      people: peopleCount,
      projects: projectsCount,
      tags: tagsCount
    }
  },
});

export default counts;