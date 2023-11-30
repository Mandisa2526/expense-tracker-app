import assert from "assert";
import pgPromise from 'pg-promise';
import Query from '../services/query.js';
import ExpenseTrackerObj from "../js/expense-tracker.js";

const pgp = pgPromise();

const connectionString = "postgres://pnxiecmc:PvNNuAy7vEMV3QYJcB3TBIBt6913L_Y8@bubble.db.elephantsql.com/pnxiecmc?ssl=true";
const db = pgp(connectionString);

let query = Query(db);

