function expandBox(boxNumber,price) {
    // Collapse all boxes first
    const allExpandData = document.querySelectorAll('.displayBox');
    allExpandData.forEach(box => {
        box.classList.remove('expand1');
        const expandData = box.querySelector('.expandData');
                expandData.style.display = 'none';
    });
    // Expand the selected box
    const expandData = document.getElementById('expandBox' + boxNumber);
    expandData.classList.add('expand1');
    // Show the display box
    const expandData1 = document.getElementById('displaybox'+ boxNumber);
    expandData1.style.display = 'block';
    expandData1.classList.add('displayexpandCart');
    const itemPrice = document.getElementById('itemPrice');
    itemPrice.innerHTML = `Total : <strong>DKK ${price}.00</strong>`;
}

function addCart() {
    alert('Suucessfully Added');
}




