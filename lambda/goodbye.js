"use strict";

module.exports.goodbye = async (event, context, callback) => {
  callback(null,  {"farewell": "Goodbye !"});
};
