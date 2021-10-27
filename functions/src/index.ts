import functions = require("firebase-functions");
import admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const algoliasearch = require("algoliasearch");
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
// const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;
const ALGOLIA_INDEX_NAME = "meme-test";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);


exports.onProductCreated = functions.firestore.document("posts/{id}")
    .onCreate((snap, context) => {
      const data = snap.data();
      data.objectID = context.params.id;
      const index = client.initIndex(ALGOLIA_INDEX_NAME);
      return index.saveObject(data);
    });


// exports.onTestCreated = functions.firestore.document("posts/El5pgMD4D6rCfDLB5I7N/test/{id}")
exports.onTestCreated = functions.firestore.document("posts/変数/test/{id}")
    .onCreate((snap, context) => {
      const data = snap.data();
      data.objectID = context.params.id;
      functions.logger.log("data", data);
      functions.logger.log("snap", snap);
      functions.logger.log("context", context);
      functions.logger.log("context.params", context.params);
      const index = client.initIndex(ALGOLIA_INDEX_NAME);
      return index.saveObject(data);
    });
