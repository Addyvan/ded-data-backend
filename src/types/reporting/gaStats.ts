import { objectType } from "nexus";

const GAstats = objectType({
  name: 'gaStats',
  definition(t : any) {

    t.int("numSessions", {
      nullable: true,
    });

    t.float("avgPageviewsPerSession", {
      nullable:true, 
    });
    t.float("avgSessionDuration", {
      nullable:true, 
    });
    t.float("avgPageLoadTime", {
      nullable:true, 
    });
    t.float("bounceRate", {
      nullable:true, 
    });

  },
});

export default GAstats;