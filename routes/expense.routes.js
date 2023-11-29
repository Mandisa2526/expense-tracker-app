import { query } from "express";

export default function ExpenseTrackerAppRoutes(expenseTrackerObject) {
    //get route
    async function pageLoad(req, res) {
    
        res.render('home')    

    };

    return{
        pageLoad
    }
}    