export default function Query(db) {
    async function addExpense(expense, amount, category) {
        let result = await getCategoryId(category);
        const sql = `INSERT INTO expense(expense, amount, category_id) VALUES ('${expense}', ${amount}, ${result.id})`;
        console.debug(sql)
        await db.none(sql);
    }

    async function expensesForCategory(category) {
        let result = await getCategoryId(category);
        const sql = `select expense, amount from expense  where category_id = ${result.id};`;
        console.debug(sql);
        return db.any(sql);
    }

    function getCategoryId(category) {    
        const sql = `SELECT id FROM category WHERE category_type = '${category}'`    
        console.debug(sql)
        return db.oneOrNone(sql);
    }

    async function getTotal(){
        await db.oneOrNone('SELECT SUM(amount) FROM expense;');
    }

    function getAllExpenses() {
        return db.any('select expense, amount, category_type as category from expense inner join category on category_id=category.id');
    }
   

    return{
    addExpense,
       getCategoryId,
       getTotal,
       getAllExpenses,
       expensesForCategory,
    }
}