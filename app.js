function newExpense(event) {
    event.preventDefault();
    const amount=document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const obj={
        amount,
        description,
        category
    }

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(obj);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    ShowUserExpenses(obj);
    document.getElementById("expenseForm").reset();
}
function ShowUserExpenses(obj){
    const parentEle=document.getElementById('ExpenseList');
    const childEle=document.createElement('li');
    childEle.textContent=obj.amount + '-' + obj.description + '-' + obj.category;
    parentEle.appendChild(childEle);

    const deleteBtn=document.createElement('input');
    deleteBtn.type="button";
    deleteBtn.value='Delete';
    deleteBtn.classList='btn btn-danger'
    deleteBtn.onclick=()=>{
        localStorage.removeItem(obj);
        parentEle.removeChild(childEle);
    }
    childEle.appendChild(deleteBtn);
    parentEle.appendChild(childEle);

    const editBtn=document.createElement('input');
    editBtn.type="button";
    editBtn.value='Edit';
    editBtn.classList='btn btn-primary';
    editBtn.onclick=()=>{
        localStorage.removeItem(obj);
        parentEle.removeChild(childEle);
    }
    childEle.appendChild(editBtn);
    parentEle.appendChild(childEle);
}
