import { query } from "express";

export default function ExpenseTrackerAppRoutes(expenseTrackerObject) {
    //get route
    async function pageLoad(req, res) {
    
        res.render('home')

    };
    //add registration
    async function add(req, res) {
        let category = req.body.categoryRadio;
        let expense = req.body.expense;
        let amount = req.body.amount;
        await expenseTrackerObject.addExpense(expense, amount, category);
        res.render('home')
    };

    return{
        pageLoad,
        add
    }
}    