
//add an event listener to the button to run calculate change function
document.getElementById('calcButton').addEventListener('click', calculateChangeDue);

function calculateChangeDue(){
    let totalCost = document.getElementById('howMuchDue').value;
    let amtTendered = document.getElementById('customerPaid').value;
    let changeDue = amtTendered - totalCost;
    console.log(changeDue);
    return changeDue;
}

var changeDue = calculateChangeDue();

function displayChange(changeDue){
    let dollarsDue = Math.floor(changeDue/1);
    let coinsDue = changeDue % 1;

    let quartersDue = Math.floor(coinsDue/0.25);
    let coinsSansQuartDue = coinsDue % 0.25;

    let dimesDue = Math.floor(coinsSansQuartDue/0.10);
    let coinsSansDimesDue = coinsSansQuartDue % 0.10;

    let nickelsDue = Math.floor(coinsSansDimesDue/0.05);
    let coinsSansNickelsDue = coinsSansDimesDue % 0.05;

    let penniesDue = Math.ceil(coinsSansNickelsDue / 0.01);

    console.log(dollarsDue);
    console.log(coinsDue);

    //establish variables for answer places
    var dollarAns = document.getElementById('dollarAns');
    var quarterAns = document.getElementById('quarterAns');
    var dimeAns = document.getElementById('dimeAns');
    var nickelAns = document.getElementById('nickelAns');
    var pennyAns = document.getElementById('pennyAns');

    //display answers
    dollarAns.innerText = dollarsDue;
    quarterAns.innerText = quartersDue;
    dimeAns.innerText = dimesDue;
    nickelAns.innerText = nickelsDue;
    pennyAns.innerText = penniesDue;
}