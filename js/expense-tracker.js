export default function ExpenseTrackerObj(query) {
   let error = '';

    async  function addExpense(expense, amount, category){
        console.debug('addExpense', expense, amount, category);
        if (!expense) {
            error += ""
        } else if(!amount) {
            error += ""
        }else if(!category){
            error += ""
        } else {
            await query.addExpense(expense, amount, category);
        }
       
    }
    function getExpenses() {

    }

    function totalExpense() {

    }
 
    async function expensesForCategory(category){
        //Should filter by the category of the expense
        return query.expensesForCategory(category);

    }    

    function deleteExpense(expenseId){
          //Delete a given expense
    }

    function allExpenses(){
        return query.getAllExpenses();
    }

    async function categoryTotals(){
    }

    return{
        addExpense,
        getExpenses,
        totalExpense,
        expensesForCategory,
        deleteExpense,
        categoryTotals,
        allExpenses
    }
}