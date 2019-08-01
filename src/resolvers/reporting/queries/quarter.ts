import { extendType, intArg, arg } from "nexus";
import {Period,  gcAccountData, Prisma} from "../../../generated/reporting/prisma-client";
import gcCollabData from "./gcCollabData";
//import month_ASC from "../../../generated/reporting/prisma-client/index";


import quarterFragment from "./fragments/quarterFragment";

function accountSummary(firstAccount, secondAccount, thirdAccount){
  return {
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
        year: intArg({required: true}),
        quarterNum: intArg({required: true})
      },
    resolve: async (parent, args : any, ctx, info) => {
       
      if (args.quarterNum < 1 || args.quarterNum > 4 ) throw Error ("Invalid quarter number. Must be a whole number from 1-4");
      
      //Argument set up for where
      let year = args.year.toString();
      const startMonth = 1 + (args.quarterNum - 1) * 3;
      var months : string[] = null;
      if (startMonth < 10){ months = [ "0" + (startMonth).toString(), "0" + (startMonth + 1).toString(), "0" + (startMonth + 2).toString() ]; }
      else { months = [ (startMonth).toString(), (startMonth + 1).toString(), (startMonth + 2).toString(),]; }
      let range : string[] = [year + "-"  + months[0], year + "-" + months[1], year + "-" + months[2] ];
      
      let periods = await ctx.reportingPrisma.periods({where: { date_in: range }, orderBy: "date_ASC" } ).$fragment(quarterFragment); 
      
      const results = {
        startPeriod: {year: year, month: startMonth}, 
        endPeriod: {year: year, month: startMonth + 2}, 
        
        gcAccountSummary: accountSummary(periods[0].gcAccount, periods[1].gcAccount, periods[2].gcAccount),
        gcCollabSummary: collabSummary(periods[0].gcCollab, periods[1].gcCollab, periods[2].gcCollab),
        gcConnexSummary: connexSummary(periods[0].gcConnex, periods[1].gcConnex, periods[2].gcConnex),
        gcMessageSummary: messageSummary(periods[0].gcMessage, periods[1].gcMessage, periods[2].gcMessage),
        gcPediaSummary: pediaSummary(periods[0].gcPedia, periods[1].gcPedia, periods[2].gcPedia),
        gcWikiSummary: wikiSummary(periods[0].gcWiki, periods[1].gcWiki, periods[2].gcWiki),
      };
      
      return results;
      },
    })
  }
});

export default quarter;


