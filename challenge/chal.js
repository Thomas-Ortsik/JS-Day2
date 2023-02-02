
tenBills = 0;
twentyBills = 0;
fiftyBills = 0;
hundoBills = 0;

tnDisplay = document.getElementById("tnStock");
twDisplay = document.getElementById("twStock");
fDisplay = document.getElementById("fStock");
hDisplay = document.getElementById("hStock");

function updateBillDisplay() {
    tnDisplay.textContent = tenBills;
    twDisplay.textContent = twentyBills;
    fDisplay.textContent = fiftyBills;
    hDisplay.textContent = hundoBills;
}

function restock() {
    tenBills = 50;
    twentyBills = 30;
    fiftyBills = 20;
    hundoBills = 20;
    updateBillDisplay();
    displayText("ATM restocked.");
};

function withdrawal() {
    let message = "";
    let amountToWithdraw = Number(document.getElementById("withdraw").value);
    if (amountToWithdraw < 0){
        amountToWithdraw = 0;
        displayText("Please enter a positive amount.");
        return;
    } 

    let neededHBills = Math.floor(amountToWithdraw / 100);
    amountToWithdraw = amountToWithdraw % 100;
    if (neededHBills > hundoBills) {
        message += "Not enough 100€ Bills available. "
        amountToWithdraw += (neededHBills - hundoBills) * 100;
        neededHBills = hundoBills;
    }

    let neededFBills = Math.floor(amountToWithdraw / 50);
    amountToWithdraw = amountToWithdraw % 50;
    if (neededFBills > fiftyBills) {
        message += "Not enough 50€ Bills available. "
        amountToWithdraw += (neededFBills - fiftyBills) * 50;
        neededFBills = fiftyBills;
    }

    let neededTwBills = Math.floor(amountToWithdraw / 20);
    amountToWithdraw = amountToWithdraw % 20;
    if (neededTwBills > twentyBills) {
        message += "Not enough 20€ Bills available. "
        amountToWithdraw += (neededTwBills - twentyBills) * 20;
        neededTwBills = twentyBills;
    }

    let neededTnBills = Math.floor(amountToWithdraw / 10);
    amountToWithdraw = amountToWithdraw % 10;
    if (neededTnBills > tenBills) {
        message += "Not enough 10€ Bills available. "
        amountToWithdraw += (neededTnBills - tenBills) * 10;
        neededTnBills = tenBills;
        message += "Withdrawal aborted."
    }
    else {
        hundoBills -= neededHBills;
        fiftyBills -= neededFBills;
        twentyBills -= neededTwBills;
        tenBills -= neededTnBills;
        message += `You receive: ${neededHBills}*100€, ${neededFBills}*50€, ${neededTwBills}*20€ and ${neededTnBills}*10€`;
    }
    displayText(message);
    updateBillDisplay();
}

function displayText(message) {
    document.getElementById("atm_out").textContent = message;
}


document.getElementById("withdrawBtn").addEventListener('click', withdrawal);
document.getElementById("restockBtn").addEventListener('click', restock);
updateBillDisplay();