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

function loadInitialList(){
    
    if(!isMobile()){
        resetList();
        renderList();
    }
}

function resetList(){
    if(!originalItem){
        let original = document.querySelector('.item-of-list');
        originalItem = original.cloneNode(true);
    }
    let list = document.querySelectorAll('.item-of-list');
    list.forEach(item => item.remove());

}

function renderList(){
    showInfo(false);
    let inputValue = document.querySelector("#searchValue").value;
    let listMotoboys = document.querySelector('.list-of-motoboys');
    resetList();
    motoboys.filter(motoboy => 
        filterMotoboy(motoboy, inputValue) //return subentendido
    ).forEach((motoboy) => {
        let newItem = originalItem.cloneNode(true);
        setInfo(newItem, motoboy);
        newItem.style.display = "flex";
        newItem.addEventListener("click",() => fillDetails(motoboy.register));
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

function fillDetails(register){
    let motoboy = motoboys.find(i => i.register == register)
    showInfo(true);
    let nameElement = document.querySelector("#detail-name");
    nameElement.innerText = motoboy.name;
    let licenseElement = document.querySelector("#detail-license");
    licenseElement.innerText = motoboy.license;
    let phoneElement = document.querySelector("#detail-phone");
    phoneElement.innerText = motoboy.phone;
    let mailElement = document.querySelector("#detail-mail");
    mailElement.innerText = motoboy.email;
}

function showInfo(show) {
    let infoMotoboyElement = document.querySelector("#detail-info-motoboy");
    infoMotoboyElement.style.display = show? "flex" : "none";
    if(isMobile() && show){
        hideMainList(true);
    }
}

function showMainContent(){
    if(isMobile()){
        hideMainList(false);
        resetList();
        renderList();
        hideMenu(true);
    }
}

function hideMenu(isHidden) {
    let navbar = document.querySelector("#menu");
    navbar.style.display = isHidden? "none" : "block";
}

function hideMainList(isHidden) {
    let mainList = document.querySelector("#main-list");
    mainList.style.display = isHidden? "none" : "block";
}

function isMobile() {
    return window.innerWidth < 768;
    
}
