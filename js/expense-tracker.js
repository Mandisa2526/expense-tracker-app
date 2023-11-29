export default function ExpenseTrackerObj(query) {
   let error = '';
   let expenseDescription = '';
   var letters = /^[A-Za-z]+$/;

   function addExpense(categoryId, amount,expense){
       //Should be able to add expenses
       
       if (expense && expense.match(letters)) {
           expenseDescription = expense;
       } else {
           expenseDescription = undefined
       }
    }

    function getExpenses(){
        //Should be able to return all the expenses
 
     }
    return{
        addExpense,
        getExpenses
    }
}