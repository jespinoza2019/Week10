let id=0;

document.getElementById('submit').addEventListener('click',() => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id',`item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-bill').value ;
    row.insertCell(1).innerHTML = '$'+ document.getElementById('new-balance').value ;
    row.insertCell(2).innerHTML = document.getElementById('new-due-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-paid-date').value ;
    row.insertCell(4).innerHTML = '$'+ document.getElementById('new-amount-due').value ;
    row.insertCell(5).innerHTML = '$'+ document.getElementById('new-amount-paid').value ;
    row.insertCell(6).innerHTML = '$'+ (document.getElementById('new-balance').value - document.getElementById('new-amount-paid').value );
    document.getElementById('new-bill').value = '';
    document.getElementById('new-balance').value = '';
    document.getElementById('new-due-date').value = '';
    document.getElementById('new-paid-date').value = '';
    document.getElementById('new-amount-due').value = '';
    document.getElementById('new-amount-paid').value = '';
    
})
