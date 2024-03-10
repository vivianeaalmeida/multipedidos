let motoboys = [
    {
        name: "Ana Maria",
        register: 1234,
        license: "FPS-9509",
        phone: "(XX) 99999-9999",
        email: "ana@example.com"
    },
    {
        name: "José Almeida Neves Santos",
        register: 4567,
        license: "FPS-9509",
        phone: "(XX) 99999-9999",
        email: "jose@example.com"
    },
    {
        name: "Luis Ricardo Vieira",
        register: 8910,
        license: "FPS-9509",
        phone: "(XX) 99999-9999",
        email: "luis@example.com"
    }
];

let originalItem;

function resetList(){
    if(!originalItem){
        let original = document.querySelector('.item-of-list');
        originalItem = original.cloneNode(true);
    }
    let list = document.querySelectorAll('.item-of-list');
    list.forEach(item => item.remove());

}

function renderList(){
    let inputValue = document.querySelector("#searchValue").value;
    let listMotoboys = document.querySelector('.list-of-motoboys');
    resetList();
    motoboys.filter(motoboy => 
        filterMotoboy(motoboy, inputValue) //return subentendido
    ).forEach((motoboy, index) => {
        let newItem = originalItem.cloneNode(true);
        setInfo(newItem, motoboy);
        newItem.style.display = "flex";
        newItem.addEventListener("click",() => showInfo(index));
        listMotoboys.appendChild(newItem);
    })
}

function filterMotoboy(motoboy, inputValue){
    if(inputValue){
        return motoboy.name.toUpperCase().includes(inputValue.toUpperCase());
     } else {
         return true;
     }
}

function setInfo(itemOfList, motoboy){
    let nameOfMotoboy = itemOfList.querySelector(".p-name-motoboys");
    nameOfMotoboy.innerText = "Nome: " + motoboy.name;
    let registerOfMotoboy = itemOfList.querySelector(".p-num-register");
    registerOfMotoboy.innerText = "Nº Registro: " + motoboy.register;
}

function showInfo(index){
    let infoMotoboyElement = document.querySelector("#detail-info-motoboy");
    infoMotoboyElement.style.display = "flex";
    let nameElement = document.querySelector("#detail-name");
    nameElement.innerText = motoboys[index].name;
    let licenseElement = document.querySelector("#detail-license");
    licenseElement.innerText = motoboys[index].license;
    let phoneElement = document.querySelector("#detail-phone");
    phoneElement.innerText = motoboys[index].phone;
    let mailElement = document.querySelector("#detail-mail");
    mailElement.innerText = motoboys[index].email;

}