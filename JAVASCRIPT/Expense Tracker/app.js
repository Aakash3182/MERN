// dom element
let balanceEL = document.getElementByID("balance");
let moneyPlusEL = document.grtElementByID("moneyPlus");
let moneyMinusEL = document.grtElementByID("moneyMinus");

//form element
let formEl = document.getElementById("expenseForm");
let titleEl = document.getElementById("title");
let amountEl = document.getElementById("amount");
let submitEl = document.getElementById("submitBtn");

//to handle update
let isEdit = false;

// list-> transaction
let listEL = document.getElementById("list");

//to read data from local storage
function readTransactions() {
  // JSON.parse => json array into object array
  return localStorage.getItem("transactions")
    ? JSON.parse(localStorage.getItem("transactions"))
    : [];
}

// store the transaction list in data variable
let data = readTransactions();

//submit handler to read form inputs
formEl.addEventListener("submit", function (event) {
  event.preventDefault(); // to avoid page refresh

  if (amountEl.value == 0 || amountEl.value == -0) {
    alert("Amount should be a proper value");
  } else {
    //form inputs
    let trData = {
      id: Math.round(Math.random() * 100000),
      title: titleEl.value,
      amount: amountEl.value,
    };
    console.log(`object =`, trData);
    storeTransactions(trData);
  }
});

// store the transaction in local storage
function storeTransactions(val) {
  data.unshift(val);
  localStorage.setItem("transactions", JSON.stringify(data));
  alert("Transaction added successfully");
  window.location.reload();
}

// update the balance , income and expenses
function updateIncomeExp() {
  let amount = data.map((item, index) => {
    return Number(item.amount);
  });
  console.log(`amount = `, amount);

  //total balance
  let bal = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  balanceEL.innerHTML = bal > -1 ? `&#8377;${bal}` : `-&#83377;${bal}`;

  //income
  let income = amounts
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  moneyPlusEL.innerHTML = `&#8377;${income}`;

  //expense
  let negVal = amounts.filter((val) => val < 0);
  let expense = negVal.reduce((acc, val) => acc + val, 0) * -1;
  moneyMinusEL.innerHTML = `&#8377;${expense.toFixed(2)}`;
}

updateIncomeExp();

//edit -> read the value from array and load into form inputs
function editItem(id) {
  let itemVal = data.find((item) => item.id == id);
  //console.log(`edit =`,itemVal)
  titleEl.value = itemVal.title;
  amountEl.value = itemVal.amount;
  isEdit = true;
  submitBtn.innerText = "Update";
}

//delete
function deleteTransaction(id) {
  //console.log(`id=`,id)
  console.log(`id= `, id);
  //to read the index position of transaction
  if (confirm(`Are you sure to delete transaction`)) {
    let itemIndex = data.findIndex((item) => item.id == id);
    //console.log(`item index =`, itemIndex)
    //delete
    data.splice(itemIndex, 1);
    // store post delete data
    localStorage.setItem("transaction", JSON.stringify(data));
    alert("Transaction deleted successfully");
    window.location.reload();
  }
}

// to print all transaction
function printTransaction(val) {
  val.forEach((item) => {
    listEL.innerHTML += `<li class="${item.amount < 0 ? `expense` : `income`}">
        <div class = "leftItem">
        <span class= "txt"> ${item.title} </span>
        <span class="price"> 6#8377; ${item.amount} </span>
        </div>
        <div class="rightItem">
        <span onclick="editItem(${item.id}) class= "btn edit">
        <i class ="fa-solid fa-pen-to-square"></i>
        </span>
        <span on click="deleteTransaction(${item.id})" class="btn delete">
        <i class ="fa-solid fa-trash"></i>
        </span>
        </div>
        </li>`;
  });
}

printTransaction(data);
