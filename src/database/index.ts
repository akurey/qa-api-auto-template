const mysql = require('mysql');
const util = require('util');

export const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transaction = async (query: string, param = []): Promise<any> => {
  const setUp = mysql.createConnection(config);
  const conn = util.promisify(setUp.query).bind(setUp);
  try {
    const result = await conn(query, param);
    return result[0];
  } catch (error) {
    console.log(error);
  } finally {
    await setUp.destroy();
  }
};
