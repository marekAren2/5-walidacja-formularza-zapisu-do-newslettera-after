let formNewsletter = document.querySelector('.myForm');
let inputAllZgody = document.querySelector('#allZgody');
let inputZgoda1 = document.querySelector('#zgoda1');
let inputNames = document.querySelector('#fullNames');

const validate = (e) => { 
    e.preventDefault();
    let inputNames = document.querySelector('#fullNames');
    let inputEmail = document.querySelector('#email');
    let listaError = document.getElementById("error-list");
    listaError.innerHTML = '';
  
    if (!inputNames.value.trim()) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie podałeś Imienia i Nazwiska';
        listaError.appendChild(liError);
    }
  
    if (!inputEmail.value.trim()) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie podałeś adresu email';
        listaError.appendChild(liError);
    }
  
    if (!inputEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie podałeś prawidłowego adresu email';
        listaError.appendChild(liError);
    }
  
    if (!inputZgoda1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Zgoda marketingowa numer 1 jest obowiazkowa - zaznacz';
        listaError.appendChild(liError);
    }
  
    if (!inputZgoda1.checked) {
    } 
  
    if (listaError.children.length > 0) {
        e.preventDefault();
    }
};

const checkboxAutoConfirm = (obiekt) => {
    let inputZgoda2 = document.querySelector('#zgoda2');
    inputZgoda1.checked = obiekt.target.checked;
    inputZgoda2.checked = obiekt.target.checked;
    inputZgoda1.disabled = obiekt.target.checked;
    inputZgoda2.disabled = obiekt.target.checked;
};

formNewsletter.addEventListener('submit', validate);
inputAllZgody.addEventListener('change', checkboxAutoConfirm );
