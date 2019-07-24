import { objectType, intArg, idArg } from "nexus";
import gcAccountData from "./gcAccountData";
import gcCollabData from "./gcCollabData";
import gcConnexData from "./gcConnexData";
import gcMessageData from "./gcMessageData";
import gcPediaData from "./gcPediaData";
import gcWikiData from "./gcWikiData";
import Period from "./period";
import { addMockFunctionsToSchema } from "graphql-tools";

const quarter = objectType({
  name: 'quarter',
  definition(t : any) {
    
    t.field("startPeriod", {
      type: Period, //TODO: Shouldn't list all fields of Period
      nullable: true
    });
    t.field("endPeriod", {
        type: Period, //TODO: Shouldn't list all fields of Period
        nullable: true
    });
    t.field("gcAccountSummary", { //TODO: Actually, each of these should probably be fragmented
      type: gcAccountData,
      nullable: true
  });
  t.field("gcCollabSummary", {
    type: gcCollabData,
    nullable: true
});
t.field("gcConnexSummary", {
  type: gcConnexData,
  nullable: true
});
t.field("gcMessageSummary", {
  type: gcMessageData,
  nullable: true
});
t.field("gcPediaSummary", {
  type: gcPediaData,
  nullable: true
});
t.field("gcWikiSummary", {
  type: gcWikiData,
  nullable: true
});
    

  }, //end of definition
});

export default quarter;