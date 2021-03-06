import { objectType, intArg, idArg } from "nexus";
import gcAccountSimple from "./variants/gcAccountSimple";
import gcCollabSimple from "./variants/gcCollabSimple";
import gcConnexSimple from "./variants/gcConnexSimple";
import gcMessageSimple from "./variants/gcMessageSimple";
import gcPediaSimple from "./variants/gcPediaSimple";
import gcWikiSimple from "./variants/gcWikiSimple";
import PeriodSimple from "./variants/periodSimple";
import { addMockFunctionsToSchema } from "graphql-tools";

const quarter = objectType({
  name: 'quarter',
  definition(t : any) {
    
    t.field("startPeriod", {
      type: PeriodSimple,
      nullable: true
    });
    t.field("endPeriod", {
        type: PeriodSimple,
        nullable: true
    });
    t.field("gcAccountSummary", { 
      type: gcAccountSimple,
      nullable: true
  });
  t.field("gcCollabSummary", {
    type: gcCollabSimple,
    nullable: true
});
t.field("gcConnexSummary", {
  type: gcConnexSimple,
  nullable: true
});
t.field("gcMessageSummary", {
  type: gcMessageSimple,
  nullable: true
});
t.field("gcPediaSummary", {
  type: gcPediaSimple,
  nullable: true
});
t.field("gcWikiSummary", {
  type: gcWikiSimple,
  nullable: true
});
    

  }, //end of definition
});

export default quarter;