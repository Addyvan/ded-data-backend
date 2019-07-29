import { objectType, intArg, idArg } from "nexus";
import gcAccountSimple from "./gcAccountSimple";
import gcCollabSimple from "./gcCollabSimple";
import gcConnexSimple from "./gcConnexSimple";
import gcMessageSimple from "./gcMessageSimple";
import gcPediaSimple from "./gcPediaSimple";
import gcWikiSimple from "./gcWikiSimple";
import PeriodSimple from "./periodSimple";
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