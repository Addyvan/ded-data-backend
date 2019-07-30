import { objectType, intArg, idArg } from "nexus";

import gcAccountSummary from "./variants/gcAccountSummary";
import gcCollabSummary from "./variants/gcCollabSummary";
import gcConnexSummary from "./variants/gcConnexSummary";
import gcMessageSummary from "./variants/gcMessageSummary";
import gcPediaSummary from "./variants/gcPediaSummary";
import gcWikiSummary from "./variants/gcWikiSummary";
import PeriodSimple from "./variants/periodSimple";

const summary = objectType({
  name: 'summary',
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
      type: gcAccountSummary,
      nullable: true
  });
  t.field("gcCollabSummary", {
    type: gcCollabSummary,
    nullable: true
});
t.field("gcConnexSummary", {
  type: gcConnexSummary,
  nullable: true
});
t.field("gcMessageSummary", {
  type: gcMessageSummary,
  nullable: true
});
t.field("gcPediaSummary", {
  type: gcPediaSummary,
  nullable: true
});
t.field("gcWikiSummary", {
  type: gcWikiSummary,
  nullable: true
});
    

  }, //end of definition
});

export default summary;