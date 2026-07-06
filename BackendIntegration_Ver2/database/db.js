import {Pool} from "pg";
import dotenv from "dotenv";

//reads your local .env if available,and injects them into process.env (js global object for application's runtime environment)
dotenv.config();

console.log(process.env.DATABASE_URL);
//postgres connection tool
const pool=new Pool({
    connectionString: process.env.DATABASE_URL
});

export default pool;