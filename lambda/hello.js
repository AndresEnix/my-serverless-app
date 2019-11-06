"use strict";

module.exports.hello = async (event, context, callback) => {
  callback(null,  {"greeting": "Hello World !"});
};
