import { queryField } from "nexus";

const gcWikiData = queryField('gcWikiData', {
  type: 'gcWikiData',
  resolve: (parent, args, ctx, info) => {
    return ctx.reportingPrisma.gcWikiDatas();
  },
});

export default gcWikiData;