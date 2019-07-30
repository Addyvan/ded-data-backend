import { extendType, intArg, arg } from "nexus";
import {Period,  gcAccountData, Prisma} from "../../../generated/reporting/prisma-client";

import summaryFragment from "./fragments/summaryFragment";

/*
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
*/
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


const summary = extendType( {
  type: "Query",
  definition(t) {
    t.field('summary', {
      type: 'summary',
      
    resolve: async (parent, args : any, ctx, info) => {
            
      //let periodRange : Period[] = await ctx.reportingPrisma.periods().$fragment(summaryFragment); 
      
      
      //periodRange = sortPeriods(periodRange); //Just in case they aren't sorted by month, as adding orderBy isn't working
      
      
      /*const results = {
        startPeriod: periodRange[0], 
        endPeriod: periodRange[2], 
        
        gcAccountSummary: accountSummary(firstPeriod.gcAccount, secondPeriod.gcAccount, thirdPeriod.gcAccount),
        gcCollabSummary: collabSummary(firstPeriod.gcCollab, secondPeriod.gcCollab, thirdPeriod.gcCollab),
        gcConnexSummary: connexSummary(firstPeriod.gcConnex, secondPeriod.gcConnex, thirdPeriod.gcConnex),
        gcMessageSummary: messageSummary(firstPeriod.gcMessage, secondPeriod.gcMessage, thirdPeriod.gcMessage),
        gcPediaSummary: pediaSummary(firstPeriod.gcPedia, secondPeriod.gcPedia, thirdPeriod.gcPedia),
        gcWikiSummary: wikiSummary(firstPeriod.gcWiki, secondPeriod.gcWiki, thirdPeriod.gcWiki),
      };*/
      const results = {
        startPeriod: null,
        endPeriod: null, 
        
        gcAccountSummary: null,
        gcCollabSummary: null,
        gcConnexSummary: null,
        gcMessageSummary: null,
        gcPediaSummary: null,
        gcWikiSummary: null,
      };
      
      //console.log(results);

      return results;
      },
    })
  }
});

export default summary;


