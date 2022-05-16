const sql = require('mssql')

const sqlConfig = {
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
  server: 'your_server',
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, 
    trustServerCertificate: false 
  }
}

module.exports = {
   async executeStatement(query)
   {
    await sql.connect(sqlConfig)
    const result = await sql.query(query);
    const { recordsets } = result;
    var data =  recordsets;
    return data;
   },
  };
  