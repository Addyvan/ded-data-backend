import { objectType } from "nexus/dist";
import Period from "./period";

const restrictedPeriod = objectType({
  name: 'extendedPeriod',
  definition(t : any) {
    
    t.field("startPeriod", {
        type: Period, //TODO: Shouldn't list all fields of Period
        nullable: true
      });

      /*

            "gcAccount",
      "gcCollab",
      "gcConnex",
      "gcMessage",
      "gcPedia",
      "gcWiki"

      */
  },
});

export default restrictedPeriod;

