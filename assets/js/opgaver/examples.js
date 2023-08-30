let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra(selectedItem) {
    /* din map kode her... */
    
    if (selectedItem !== "") {
        myExtras.push(selectedItem);

        updateExtras();
    }
}

function updateExtras() {
    /* din map kode her... */
    let options = myExtras.map((extraUdstyr)=>{
        return `<div>${extraUdstyr}</div>`;
    });

    myExtrasListElement.innerHTML = options.join('');

}


