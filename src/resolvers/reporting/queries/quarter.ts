import { extendType, intArg, arg } from "nexus";
import {Period,  gcAccountData} from "../../../generated/reporting/prisma-client";
import gcCollabData from "./gcCollabData";
//import month_ASC from "../../../generated/reporting/prisma-client/index";


import quarterFragment from "./fragments/quarterFragment";

function sortPeriods(periods : Period[]) {
  periods.sort(
    (n1, n2) => 
      {if (n1.month > n2.month) return 1; 
      else if (n1.month == n2.month) return 0;
      else return -1;
      }
  )
  return periods;
}


function accountSummary(firstAccount, secondAccount, thirdAccount){
  return {
    period: {

    },
    totalNumAccounts: thirdAccount.totalNumAccounts,
    numNewAccounts: firstAccount.numNewAccounts + secondAccount.numNewAccounts + thirdAccount.numNewAccounts,
  };
}

function collabSummary(firstCollab, secondCollab, thirdCollab){ 
  return {
    totalNumAccounts: thirdCollab.totalNumAccounts,
    numNewAccounts: firstCollab.numNewAccounts + secondCollab.numNewAccounts + thirdCollab.numNewAccounts,
    gaStats: gaStatsSummary(firstCollab.gaStats, secondCollab.gaStats, thirdCollab.gaStats),
    totalNumGroups: thirdCollab.totalNumGroups,
    numNewGroups: firstCollab.numNewGroups + secondCollab.numNewGroups + thirdCollab.numNewGroups,
  };
}

function connexSummary(firstConnex, secondConnex, thirdConnex){
  return {
    totalNumAccounts: thirdConnex.totalNumAccounts,
    numNewAccounts: firstConnex.numNewAccounts + secondConnex.numNewAccounts + thirdConnex.numNewAccounts,
    gaStats: gaStatsSummary(firstConnex.gaStats, secondConnex.gaStats, thirdConnex.gaStats),
    totalNumGroups: thirdConnex.totalNumGroups,
    numNewGroups: firstConnex.numNewGroups + secondConnex.numNewGroups + thirdConnex.numNewGroups,
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
    gaStats: gaStatsSummary(firstWiki.gaStats, secondWiki.gaStats, thirdWiki.gaStats),
    totalNumArticles: thirdWiki.totalNumArticles,
    numNewArticles: firstWiki.numNewArticles + secondWiki.numNewArticles + thirdWiki.numNewArticles,
    totalNumEdits: thirdWiki.totalNumEdits,
    numNewEdits: firstWiki.numNewEdits + secondWiki.numNewEdits + thirdWiki.numNewEdits,
  };
}

function gaStatsSummary(firstData, secondData, thirdData){ 
  return {
    numSessions: firstData.numSessions + secondData.numSessions + thirdData.numSessions, 
    avgPageviewsPerSession: Math.round((firstData.avgPageviewsPerSession + secondData.avgPageviewsPerSession + thirdData.avgPageviewsPerSession ) / 3 * 1000) / 1000,
    avgSessionDuration: Math.round((firstData.avgSessionDuration + secondData.avgSessionDuration + thirdData.avgSessionDuration ) / 3 * 1000) / 1000,
    avgPageLoadTime: Math.round((firstData.avgPageLoadTime + secondData.avgPageLoadTime + thirdData.avgPageLoadTime ) / 3 * 1000) / 1000,
    bounceRate: Math.round((firstData.bounceRate + secondData.bounceRate + thirdData.bounceRate ) / 3 * 1000) / 1000,
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
      
      if (args.quarterNum < 0 || args.quarterNum > 4 ) throw Error ("Invalid quarter number. Must be a whole number from 1-4");
      

      const range : any = 1 + (args.quarterNum - 1) * 3;
      let periodRange : Period[] = await ctx.reportingPrisma.periods({ where: { year: args.year, month_in: [range, range + 1, range + 2] } } ).$fragment(quarterFragment); 
      
      periodRange = sortPeriods(periodRange); //Just in case they aren't sorted by month, as adding orderBy didn't seem to do anything
      
      //idk why this is necessary, but it is
      var firstPeriod, secondPeriod, thirdPeriod = null;
      var num = 0;
      periodRange.forEach(element => {
        if (num == 0) firstPeriod = element;
        else if (num == 1) secondPeriod = element;
        else thirdPeriod = element;
        num++;
      });


      const accountSummaryValue = accountSummary(firstPeriod.gcAccount, secondPeriod.gcAccount, thirdPeriod.gcAccount);
      const collabSummaryValue = collabSummary(firstPeriod.gcCollab, secondPeriod.gcCollab, thirdPeriod.gcCollab);
      const connexSummaryValue = connexSummary(firstPeriod.gcConnex, secondPeriod.gcConnex, thirdPeriod.gcConnex);
      const messageSummaryValue = messageSummary(firstPeriod.gcMessage, secondPeriod.gcMessage, thirdPeriod.gcMessage);
      const pediaSummaryValue = pediaSummary(firstPeriod.gcPedia, secondPeriod.gcPedia, thirdPeriod.gcPedia);
      const wikiSummaryValue = wikiSummary(firstPeriod.gcWiki, secondPeriod.gcWiki, thirdPeriod.gcWiki);
      
      const results = {
        startPeriod: {
          year: periodRange[0]["year"],
          month: periodRange[0]["month"]
        }, //need to restrict fields provided
        endPeriod: {
          year: periodRange[2]["year"],
          month: periodRange[2]["month"]
        }, //need to restrict fields provided
        //endPeriod: periodRange[2],
        gcAccountSummary: accountSummaryValue,
        gcCollabSummary: collabSummaryValue,
        gcConnexSummary: connexSummaryValue,
        gcMessageSummary: messageSummaryValue,
        gcPediaSummary: pediaSummaryValue,
        gcWikiSummary: wikiSummaryValue
      };
      
      //console.log(results);

      return results;
      },
    })
  }
});

export default quarter;


