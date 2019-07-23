
// Mapping Digital Government
import Person from "./mapping/person";
import Project from "./mapping/project";
import Tag from "./mapping/tag";
import Count from "./mapping/count";

// Reporting
import gaStats from "./reporting/gaStats"
import gcAccountData from "./reporting/gcAccountData";
import gcCollabData from "./reporting/gcCollabData";
import gcConnexData from "./reporting/gcConnexData";
import gcMessageData from "./reporting/gcMessageData";
import gcPediaData from "./reporting/gcPediaData";
import gcWikiData from "./reporting/gcWikiData";
import period from "./reporting/period";
import quarter from "./reporting/quarter";
//import report from "./reporting/report";

const Mapping = {
  Person,
  Project,
  Tag, 
  Count
}

const Reporting = {
  gaStats,
  gcAccountData,
  gcCollabData,
  gcConnexData,
  gcMessageData,
  gcPediaData,
  gcWikiData,
  period,
  quarter
  //report
};

export {
  Mapping,
  Reporting
};