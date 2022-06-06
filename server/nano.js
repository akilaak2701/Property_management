var nano = require('nano');
const url = "https://apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9:8db4bc5abe318da5e50e638f8cb126b5@e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudant.com/";   
const nanodb = nano(process.env.COUCHDB_URL || url);// connect with couchdb
const testdb = nanodb.use('propertydb'); // connect to database
module.exports={testdb,nano};