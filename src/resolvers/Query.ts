import { idArg, queryType, stringArg } from 'nexus';

const Query = queryType({
  definition(t) {

    t.list.field('people', {
      type: 'Person',
      args: {
        id: stringArg()
      },
      resolve: (parent, args : any, ctx, info) => {
        if (args.id) {
          return ctx.prisma.persons({where: {id: args.id}});
        } else {
          return ctx.prisma.persons(args);
        }
      },
    })

    t.list.field('projects', {
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
    })

    t.list.field('tags', {
      type: 'Tag',
      args: {
        id: stringArg()
      },
      resolve: (parent, args : any, ctx) => {
        if (args.id) {
          return ctx.prisma.tags({where: {id: args.id}});
        } else {
          return ctx.prisma.tags(args);
        }
      },
    })

    t.field('counts', {
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
    })
    /*
    t.list.field('filterProjects', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.posts({
          where: {
            OR: [
              { title_contains: searchString },
              { content_contains: searchString },
            ],
          },
        })
      },
    })*/

  },
});

export default Query;