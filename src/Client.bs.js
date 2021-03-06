// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Js_dict = require("bs-platform/lib/js/js_dict.js");
var ApolloLinks = require("reason-apollo/src/ApolloLinks.bs.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var ApolloInMemoryCache = require("reason-apollo/src/ApolloInMemoryCache.bs.js");

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(/* None */0, /* None */0, /* () */0);

function httpLink(token) {
  return ApolloLinks.createHttpLink("https://api.github.com/graphql", /* None */0, /* None */0, /* Some */[Js_dict.fromList(/* :: */[
                    /* tuple */[
                      "Authorization",
                      "bearer " + token
                    ],
                    /* [] */0
                  ])], /* None */0, /* None */0, /* () */0);
}

function instance(token) {
  return ReasonApollo.createApolloClient(httpLink(token), inMemoryCache, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0);
}

exports.inMemoryCache = inMemoryCache;
exports.httpLink = httpLink;
exports.instance = instance;
/* inMemoryCache Not a pure module */
