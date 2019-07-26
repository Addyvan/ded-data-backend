import { objectType } from "nexus";

const Period = objectType({
  name: 'Period',
  definition(t : any) {

    t.int("year", {
      nullable: false
    });
    t.int("month", {
      nullable: false
    });
      
  },
});

export default Period;