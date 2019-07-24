import { extendType, intArg } from "nexus";
import {Period,  gcAccountData} from "../../../generated/reporting/prisma-client";
import gcCollabData from "./gcCollabData";
//import month_ASC from "../../../generated/reporting/prisma-client/index";

import quarterFragment from "./fragments/quarterFragment";

function accountSummary(firstAccount, secondAccount, thirdAccount){
  //console.log(firstAccount);console.log(secondAccount);console.log(thirdAccount);
  return {
    totalNumAccounts: thirdAccount.totalNumAccounts,
    numNewAccounts: firstAccount.numNewAccounts + secondAccount.numNewAccounts + thirdAccount.numNewAccounts,
  };
}

function collabSummary(firstCollab, secondCollab, thirdCollab){

  return {
    totalNumAccounts: thirdCollab.totalNumAccounts,
    numNewAccounts: firstCollab.numNewAccounts + secondCollab.numNewAccounts + thirdCollab.numNewAccounts,
    gaData: null,
    totalNumGroups: thirdCollab.totalNumGroups,
    numNewGroups: firstCollab.numNewGroups + secondCollab.numNewGroups + thirdCollab.numNewGroups,
  };
}
function connexSummary(firstConnex, secondConnex, thirdConnex){
  
  return {
    totalNumAccounts: thirdConnex.totalNumAccounts,
    numNewAccounts: firstConnex.numNewAccounts + secondConnex.numNewAccounts + thirdConnex.numNewAccounts,
    gaData: null,
    totalNumGroups: firstConnex.numNewGroups + secondConnex.numNewGroups + thirdConnex.numNewGroups,
    numNewGroups: null,
  };
}
function messageSummary(firstMessage, secondMessage, thirdMessage){

  return {
    totalNumAccounts: thirdMessage.totalNumAccounts,
    numNewAccounts: firstMessage.numNewAccounts + secondMessage.numNewAccounts + thirdMessage.numNewAccounts,
    totalNumChannelMessages: thirdMessage.totalNumChannelMessages,
    numNewChannelMessages: firstMessage.numNewChannelMessages + secondMessage.numNewChannelMessages + thirdMessage.numNewChannelMessages,
    totalNumPrivateGroupMessages: thirdMessage.totalNumPrivateGroupMessages,
    numNewPrivateGroupMessages: firstMessage.numNewPrivateGroupMessages + secondMessage.numNewPrivateGroupMessages + thirdMessage.numNewPrivateGroupMessages,
    totalNumDirectMessages: thirdMessage.totalNumDirectMessages,
    numNewDirectMessages: firstMessage.numNewDirectMessages + secondMessage.numNewDirectMessages + thirdMessage.numNewDirectMessages,
    totalNumFileUploads: thirdMessage.totalNumFileUploads,
    numNewFileUploads: firstMessage.numNewFileUploads + secondMessage.numNewFileUploads + thirdMessage.numNewFileUploads,

  };
}
function pediaSummary(firstPedia, secondPedia, thirdPedia){

  return {
    totalNumAccounts: thirdPedia.totalNumAccounts,
    numNewAccounts: firstPedia.numNewAccounts + secondPedia.numNewAccounts + thirdPedia.numNewAccounts,
    totalNumArticles: thirdPedia.totalNumArticles,
    numNewArticles: firstPedia.numNewArticles + secondPedia.numNewArticles + thirdPedia.numNewArticles,
    totalNumEdits: thirdPedia.totalNumEdits,
    numNewEdits: firstPedia.numNewEdits + secondPedia.numNewEdits + thirdPedia.numNewEdits,
  };
}
function wikiSummary(firstWiki, secondWiki, thirdWiki){

  return {
    totalNumAccounts: thirdWiki.totalNumAccounts,
    numNewAccounts: firstWiki.numNewAccounts + secondWiki.numNewAccounts + thirdWiki.numNewAccounts,
    gaData: null,
    totalNumArticles: thirdWiki.totalNumArticles,
    numNewArticles: firstWiki.numNewArticles + secondWiki.numNewArticles + thirdWiki.numNewArticles,
    totalNumEdits: thirdWiki.totalNumEdits,
    numNewEdits: firstWiki.numNewEdits + secondWiki.numNewEdits + thirdWiki.numNewEdits,
  };
}

function gaDataSummary(firstData, secondData, thirdData){

  return { //TODO: Verify 
    numSessions: firstData.numSessions + secondData.numSessions + thirdData.numSessions,
    avgPageviewsPerSession: (firstData.avgPageviewsPerSession + secondData.avgPageviewsPerSession + thirdData.avgPageviewsPerSession ) / 3,
    avgSessionDuration: (firstData.avgSessionDuration + secondData.avgSessionDuration + thirdData.avgSessionDuration ) / 3,
    avgPageLoadTime: (firstData.avgPageLoadTime + secondData.avgPageLoadTime + thirdData.avgPageLoadTime ) / 3,
    bounceRate: (firstData.bounceRate + secondData.bounceRate + thirdData.bounceRate ) / 3,
  }
}

const quarter = extendType( {
  type: "Query",
  definition(t) {
    t.field('quarter', {
      type: 'quarter',
      args: {
        year: intArg(),
        quarterNum: intArg()
      },
    resolve: async (parent, args : any, ctx, info) => {
      
      const range : any = 1 + (args.quarterNum - 1) * 3;
      const periodRange : Period[] = await ctx.reportingPrisma.periods({ /*TODO: orderBy: ____ ,*/where: { year: args.year, month_in: [range, range + 1, range + 2] } } ).$fragment(quarterFragment);
      if (periodRange.length != 3) throw Error ("Quarter is missing one or more reports");
      
      //idk why this is necessary, but it is
      var firstPeriod, secondPeriod, thirdPeriod = null;
      var num = 0;
      periodRange.forEach(element => {
        if (num == 0) firstPeriod = element;
        else if (num == 1) secondPeriod = element;
        else thirdPeriod = element;
        num++;
      });
      
      return await {
          startPeriod: periodRange[0],
          endPeriod: periodRange[2],
          gcAccountSummary: accountSummary(firstPeriod.gcAccount, secondPeriod.gcAccount, thirdPeriod.gcAccount),
          gcCollabSummary: collabSummary(firstPeriod.gcCollab, secondPeriod.gcCollab, thirdPeriod.gcCollab),
          gcConnexSummary: connexSummary(firstPeriod.gcConnex, secondPeriod.gcConnex, thirdPeriod.gcConnex),
          gcMessageSummary: messageSummary(firstPeriod.gcMessage, secondPeriod.gcMessage, thirdPeriod.gcMessage),
          gcPediaSummary: pediaSummary(firstPeriod.gcPedia, secondPeriod.gcPedia, thirdPeriod.gcPedia),
          gcWikiSummary: wikiSummary(firstPeriod.gcWiki, secondPeriod.gcWiki, thirdPeriod.gcWiki),
      };
      },
    })
  }
});

export default quarter;


