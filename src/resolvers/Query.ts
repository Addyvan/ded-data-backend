
// Mapping Digital Government
import people from "./mapping/queries/people";
import projects from "./mapping/queries/projects";
import tags from "./mapping/queries/tags";
import counts from "./mapping/queries/counts";

// Reporting
import gcAccountData from "./reporting/queries/gcAccountData";
import gcCollabData from "./reporting/queries/gcCollabData";
import gcConnexData from "./reporting/queries/gcConnexData";
import gcMessageData from "./reporting/queries/gcMessageData";
import gcPediaData from "./reporting/queries/gcPediaData";
import gcWikiData from "./reporting/queries/gcWikiData";
import period from "./reporting/queries/period";
import periods from "./reporting/queries/periods";
import quarter from "./reporting/queries/quarter";
import summary from "./reporting/queries/summary";

const Mapping = {
  people,
  projects,
  tags,
  counts
}

const Reporting = {
  gcAccountData,
  gcCollabData,
  gcConnexData,
  gcMessageData,
  gcPediaData,
  gcWikiData,
  period,
  periods,
  quarter,
  summary
 }

export {
  Mapping,
  Reporting
};