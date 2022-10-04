const { Pool } = require('pg');

const PG_URI = 'postgres://todkkube:CvOHogNm7N1EuKBBFbei6muuGH_Uq160@heffalump.db.elephantsql.com/todkkube';

const pool = new Pool ({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query', text);
    return pool.query(text, params, callback);
  }
};