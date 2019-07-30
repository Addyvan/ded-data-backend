import { objectType } from "nexus";

const PeriodSimple = objectType({
  name: 'PeriodSimple',
  definition(t : any) {

    t.int("year", {
      nullable: false
    });
    t.int("month", {
      nullable: false
    });
      
  },
});

export default PeriodSimple;