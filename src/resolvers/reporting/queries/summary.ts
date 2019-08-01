import { extendType, intArg, arg } from "nexus";
import {Period,  gcAccountData, Prisma} from "../../../generated/reporting/prisma-client";

import summaryFragment from "./fragments/summaryFragment";

function accountSummary(periodRange){
  return {
    totalNumAccounts: periodRange[periodRange.length - 1].gcAccount.totalNumAccounts,
  };
}

function collabSummary(periodRange){ 
  let numSessions = 0;
  let avgPageLoadTime = 0;
  let avgSessionDuration = 0;
  let avgPageviewsPerSession = 0;
  let bounceRate = 0;
  let count = 0;

  periodRange.forEach(element =>
    { 
      numSessions += element.gcCollab.gaStats.numSessions;
      avgPageLoadTime += element.gcCollab.gaStats.avgPageLoadTime;
      avgSessionDuration += element.gcCollab.gaStats.avgSessionDuration;
      avgPageviewsPerSession += element.gcCollab.gaStats.avgPageviewsPerSession;
      bounceRate += element.gcCollab.gaStats.bounceRate;
      count ++;
    }
  );
  return {
    totalNumAccounts: periodRange[periodRange.length - 1].gcCollab.totalNumAccounts,
    gaStats:  {
      numSessions: numSessions, //just the sum
      avgPageviewsPerSession: Math.round(avgPageviewsPerSession / count * 1000) / 1000,
      avgSessionDuration: Math.round(avgSessionDuration / count * 1000) / 1000,
      avgPageLoadTime: Math.round(avgPageLoadTime / count * 1000) / 1000,
      bounceRate: Math.round(bounceRate / count * 1000) / 1000,
    },
    totalNumGroups: periodRange[periodRange.length - 1].gcCollab.totalNumGroups,
  };
}

function connexSummary(periodRange){
  let numSessions = 0;
  let avgPageLoadTime = 0;
  let avgSessionDuration = 0;
  let avgPageviewsPerSession = 0;
  let bounceRate = 0;
  let count = 0;

  periodRange.forEach(element =>
    { 
      numSessions += element.gcConnex.gaStats.numSessions;
      avgPageLoadTime += element.gcConnex.gaStats.avgPageLoadTime;
      avgSessionDuration += element.gcConnex.gaStats.avgSessionDuration;
      avgPageviewsPerSession += element.gcConnex.gaStats.avgPageviewsPerSession;
      bounceRate += element.gcConnex.gaStats.bounceRate;
      count ++;
    }
  );
  return {
    totalNumAccounts: periodRange[periodRange.length - 1].gcConnex.totalNumAccounts,
    gaStats:  {
      numSessions: numSessions, //just the sum
      avgPageviewsPerSession: Math.round(avgPageviewsPerSession / count * 1000) / 1000,
      avgSessionDuration: Math.round(avgSessionDuration / count * 1000) / 1000,
      avgPageLoadTime: Math.round(avgPageLoadTime / count * 1000) / 1000,
      bounceRate: Math.round(bounceRate / count * 1000) / 1000,
    },
    totalNumGroups: periodRange[periodRange.length - 1].gcConnex.totalNumGroups,
  };
}

function messageSummary(periodRange){
  return {
    totalNumAccounts: periodRange[periodRange.length - 1].gcMessage.totalNumAccounts,
    totalNumChannelMessages: periodRange[periodRange.length - 1].gcMessage.totalNumChannelMessages,
    totalNumPrivateGroupMessages: periodRange[periodRange.length - 1].gcMessage.totalNumPrivateGroupMessages,
    totalNumDirectMessages: periodRange[periodRange.length - 1].gcMessage.totalNumDirectMessages,
    totalNumFileUploads: periodRange[periodRange.length - 1].gcMessage.totalNumFileUploads,
  };
}

function pediaSummary(periodRange){
  return {
    totalNumAccounts: periodRange[periodRange.length - 1].gcPedia.totalNumAccounts,
    totalNumArticles: periodRange[periodRange.length - 1].gcPedia.totalNumArticles,
    totalNumEdits: periodRange[periodRange.length - 1].gcPedia.totalNumEdits,
  };
}

function wikiSummary(periodRange){
  let numSessions = 0;
  let avgPageLoadTime = 0;
  let avgSessionDuration = 0;
  let avgPageviewsPerSession = 0;
  let bounceRate = 0;
  let count = 0;

  periodRange.forEach(element =>
    { 
      numSessions += element.gcWiki.gaStats.numSessions;
      avgPageLoadTime += element.gcWiki.gaStats.avgPageLoadTime;
      avgSessionDuration += element.gcWiki.gaStats.avgSessionDuration;
      avgPageviewsPerSession += element.gcWiki.gaStats.avgPageviewsPerSession;
      bounceRate += element.gcWiki.gaStats.bounceRate;
      count ++;
    }
  );

  return {
    totalNumAccounts: periodRange[periodRange.length - 1].gcWiki.totalNumAccounts,
    gaStats:  {
      numSessions: numSessions, //just the sum
      avgPageviewsPerSession: Math.round(avgPageviewsPerSession / count * 1000) / 1000,
      avgSessionDuration: Math.round(avgSessionDuration / count * 1000) / 1000,
      avgPageLoadTime: Math.round(avgPageLoadTime / count * 1000) / 1000,
      bounceRate: Math.round(bounceRate / count * 1000) / 1000,
    },
    totalNumArticles: periodRange[periodRange.length - 1].gcWiki.totalNumArticles,
    totalNumEdits: periodRange[periodRange.length - 1].gcWiki.totalNumEdits,
  };
}

const summary = extendType( {
  type: "Query",
  definition(t) {
    t.field('summary', {
      type: 'summary',
      
    resolve: async (parent, args : any, ctx, info) => {
            
      let periodRange : Period[] = await ctx.reportingPrisma.periods().$fragment(summaryFragment); 
      
      

      const results = {
        startPeriod: {
          month: periodRange[0].date.substr(5),
          year: periodRange[0].date.substr(0,4),
        },
        endPeriod: {
          month: periodRange[periodRange.length - 1].date.substr(5),
          year: periodRange[periodRange.length - 1].date.substr(0,4),
        },
        
        gcAccountSummary: accountSummary(periodRange),
        gcCollabSummary: collabSummary(periodRange),
        gcConnexSummary: connexSummary(periodRange),
        gcMessageSummary: messageSummary(periodRange),
        gcPediaSummary: pediaSummary(periodRange),
        gcWikiSummary: wikiSummary(periodRange),
      };
      
      //console.log(results);

      return results;
      },
    })
  }
});

export default summary;


