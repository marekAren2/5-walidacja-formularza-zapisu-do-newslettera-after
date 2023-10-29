// HOWTO: pamietaj


let formNewsletter = document.querySelector('.myForm');
// console.log("🚀 ~ file: script.js:5 ~ formNewsletter:", formNewsletter);
let inputAllZgody = document.querySelector('#allZgody');
// zgode1 przenosze do gory globalnie z funkcji check lokalnie
//  bo w dwoch funkcjach bedzie uzyta 
let inputZgoda1 = document.querySelector('#zgoda1');
let inputNames = document.querySelector('#fullNames');

const validate = (e) => { e.preventDefault();
  // console.log('LINIA 9:   funkcja validate');
  let inputNames = document.querySelector('#fullNames');
  let inputEmail = document.querySelector('#email');
    // let
  //   console.log("🚀 ~ file: script.js:12 ~ validate ~ inputEmail:", inputEmail);  
  // let errorForm = [];
  let listaError = document.getElementById("error-list");
  listaError.innerHTML = '';
  
  if (!inputNames.value.trim()) {
    // console.log("🚀 ~ file: script.js:15 ~ validate ~ inputNames:", inputNames);
    // errorForm.push('Nie podałeś Imienia i Nazwiska')
    // console.log("🚀 ~ file: script.js:22 ~ validate ~ let listaError:", listaError)
    let liError = document.createElement('li');
    liError.innerText = 'Nie podałeś Imienia i Nazwiska';
    // console.log("🚀 ~ file: script.js:25 ~ validate ~ liError.innerText:", liError.innerText)
    listaError.appendChild(liError);
    
  }
    //   Text.
    // else { console.log('ok');}
    // ASK: zmienna w kazdym warunku powinna byc zadeklarowana?!
  if (!inputEmail.value.trim()) {
    // console.log("🚀 ~ file: script.js:15 ~ validate ~ inputEmail:", inputEmail);
    // errorForm.push('Nie podałeś adresu email');
    let liError = document.createElement('li');
    liError.innerText = 'Nie podałeś adresu email';
    listaError.appendChild(liError);
    // console.log("🚀 ~ file: script.js:31 ~ validate ~ listaError:", listaError);
  }
  if (!inputEmail.value.includes('@')) {
    // console.log("🚀 ~ file: script.js:15 ~ validate ~ inputEmail:", inputEmail);
    let liError = document.createElement('li');
    // errorForm.push('Nie podałeś prawidłowego adresu email');
    liError.innerText = 'Nie podałeś prawidłowego adresu email';
    listaError.appendChild(liError);
    // console.log("🚀 ~ file: script.js:31 ~ validate ~ listaError:", listaError);
  }
    // else { console.log('ok');}
  if (!inputZgoda1.checked) {
    // console.log("🚀 ~ file: script.js:15 ~ validate ~ zgoda1:", inputZgoda1);
    let liError = document.createElement('li');
    // errorForm.push('Zgoda marketingowa numer 1 jest obowiazkowa - zaznacz');
    liError.innerText = 'Zgoda marketingowa numer 1 jest obowiazkowa - zaznacz';
    listaError.appendChild(liError);
  }
    // else { console.log('ok');}
    // inputEmail.value.foreach((e)=>{console.log(e);})
    //FIXME
    // errorForm.foreach((e)=>{console.log(e);})
    // console.log("🚀 ~ file: script.js:35 ~ validate ~ inputEmail.value.find('@'):", inputEmail.value.find('@'));
    
  if (!inputZgoda1.checked) {
    // console.log("🚀 ~ file: script.js:15 ~ validate ~ zgoda1:", inputZgoda1);
    // errorForm.push('Zgoda marketingowa numer 1 jest obowiazkowa - zaznacz');
  } 
      // console.log("🚀 ~ file: script.js:17 ~ validate ~ errorForm:", errorForm);
  if (listaError.children.length > 0) {
    // console.log("🚀 ~ file: script.js:71 ~ validate ~ listaError.children.length:", listaError.children.length)
    // event.preventDefault();
    e.preventDefault();
  }
    // else { console.log("🚀 ~ file: script.js:74 ~       validate    ~ listaError.children.length:",listaError.children.length)
    //     console.log('bledy');
    // }
};
// przeniesione do funkcji validate
/* 
let inputNames = document.querySelector('#fullNames');
let inputEmail = document.querySelector('#email');
let inputAllZgody = document.querySelector('#allZgody');
let inputZgoda1 = document.querySelector('#zgoda1');
let inputZgoda2 = document.querySelector('#zgoda2'); */

const checkboxAutoConfirm = (obiekt) => {
  // console.log('function checkboxAutoConfirm ');
  
  let inputZgoda2 = document.querySelector('#zgoda2');
  // ask: czy wskazane pobranie wlasnosci na obiektach //do zmiennych?
  // blednie bo tylko przypisani '=' zawsze bedzie tru!
  // if (inputAllZgody = true) {
  // to ok FIXME OK:
  // if (inputAllZgody.checked) {
  //   if (inputAllZgody.checked === true) {
  // kolejny sposob pobrania wlasnosci obiektu przekazanego do funkcji jako parametr

  
  /*   if (obiekt.target.checked === true) {
    inputZgoda1.checked = true;
    inputZgoda2.checked = true;
    console.log("🚀 ~ file: script.js:23 ~ checkboxAutoConfirm ~  inputZgoda2.checked :", inputZgoda2.checked);

    // FIXME OK powyzej warunek nie dziala odznaczenie wsztystkik czemu
  } else {
    inputZgoda1.checked = false;
    inputZgoda2.checked = false;
    console.log("🚀 ~ file: script.js:30 ~ checkboxAutoConfirm ~ inputZgoda2.checked :", inputZgoda2.checked );
  } */
  // ASK: caly warunek powyzszy mozemu zastapic tymi dwoma linijkami
  inputZgoda1.checked = obiekt.target.checked;
  inputZgoda2.checked = obiekt.target.checked;

  inputZgoda1.disabled = obiekt.target.checked;
  inputZgoda2.disabled = obiekt.target.checked;

  // console.log("🚀 ~ file: script.js:42 ~ obiekt.target.checked:", obiekt.target.checked);

   



  // if (inputAllZgody.checked === true) {
  //     inputZgoda1.value = true;
  //     inputZgoda2.value = true;
  // }
};




// formNewsletter.addEventListener('submit', (e) => { e.preventDefault();
formNewsletter.addEventListener('submit', validate);
// console.log(e);

//  inputNames.value;
// inputEmail.value;
// inputAllZgody.value;
// inputZgoda1.value;
// inputZgoda2.value;
// console.log("🚀 ~ file: script.js:13 ~ inputNames.value:", inputNames);

// console.log(inputNames.value);
// console.log(inputEmail.value);
// console.log(inputAllZgody.checked);
// console.log(inputZgoda1.checked);
// console.log(inputZgoda2.checked);

// if inputNames.value ==="" {
//     console.log('nie podałeś imienia i nazwiska')
// }

// });
inputAllZgody.addEventListener('change', checkboxAutoConfirm );

// inputAllZgody.addEventListener('submit', checkboxAutoConfirm );
console.log("🚀 ~ file: script.js:52 ~ inputAllZgody:", inputAllZgody)

// inputAllZgody.addEventListener('change', () => {
//     console.log("🚀 ~ file: script.js:49 ~ inputAllZgody.addEventListener('change', checkboxAutoConfirm ):", inputAllZgody.addEventListener('change', checkboxAutoConfirm ))
// })











/* Stwórz plik index.html z pełną strukturą strony HTML5, a w nim formularz zawierający:

    pole tekstowe Imie i nazwisko
    pole tekstowe Adres e-mail
    checkbox Wszystkie zgody
    checkbox Zgoda marketingowa 1
    checkbox Zgoda marketingowa 2

Stwórz funkcję validate(), która będzię uruchamiana przed wysłaniem formularza.

Funkcja validate() ma sprawdzać:

    czy zostało wypełnione pole tekstowe Imie i nazwisko
    czy zostało wypełnione pole tekstowe Adres e-mail
    czy adres email zawiera znak @
    czy został zaznaczony checkbox ze Zgodą marketingową 1

W przypadku, gdy któreś z powyższych wymagań nie zostało spełnione, skrypt ma informować internautę o tym jako lista z błędami do poprawy.

Checkbox Wszystkie zgody po zaznaczeniu ma automatycznie zaznaczać pozostałe checkboxy (tj. Zgoda marketingowa 1 i Zgoda marketingowa 2) i wyłączać możliwość ich odznaczenia.

Natomiast po odznaczeniu checkbox’a Wszystkie zgody pozostałe checkboxy (tj. Zgoda marketingowa 1 i Zgoda marketingowa 2) mają zostać także odznaczone i ma zostać włączona możliwość ich osobnego zaznaczania.

Przykładowy wygląd od lewej:

    pustego formularza
    częściowo wypełnionego formularza z komunikatami walidacji

Formularz Newsletter'a
Formularz Newsletter'a z komunikatami

Stylowanie CSS NIE jest wymagane.

 

W video znajdziesz omówienie rozwiązania zadania, tutaj możesz pobrać kod rozwiązania

 */

/* console.log(`WARSZTAT - Walidacja formularza zapisu do Newsletter'a`);

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imie i nazwisko!';
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '' ) {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Adres e-mail!';
        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś Zgody 1!';
        errors.appendChild(liError);
    }

    if(errors.children.length > 0) {
        event.preventDefault();
    }

}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree); */