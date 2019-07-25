import { prismaObjectType } from "nexus-prisma";

const GAstats = prismaObjectType({
  name: 'gaStats',
  definition(t : any) {
    t.prismaFields([
      "id", 
      "numSessions", 
      "avgPageviewsPerSession",
      "avgSessionDuration",
      "avgPageLoadTime",
      "bounceRate"
      
    ])
  },
});

export default GAstats;