const getExpenseTotal = (expenses) => {
    let total = 0;
    if(expenses && expenses[0]){
    for(var i=0; i<expenses.length; i++) {
        total = total + expenses[i].amount;
    }
   }
    return total;
}
export default getExpenseTotal;