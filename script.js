const q = (selector) => document.querySelector(selector);

const wrapper = q(".wrapper");
const wrapper2 = q(".wrapper2");

const getUsersAPI = async (URL) => {
  const res = await fetch(URL);
  return await res.json();
};

getUsersAPI("https://jsonplaceholder.typicode.com/users").then((data) => {
  const newData = data.map((item) => {
    if (Math.floor(Math.random() * 2) !== 0) {
      item.active = true;
    } else item.active = false;

    return item;
  });

  createCard(newData, wrapper) // wrapper, true); // Parametrizzare la funzione
  //createCard(newData, wrapper2, false);

  newCard(newData, wrapper2)

});




//*****  CREATE CARD  *****  //  container

const createCard = (data, container)  => {
  // Element creation
  container.innerHTML = data  // container
    .filter((item) => item.active === true)
    .map(
      (obj, index) =>
      `<div class="wrapper-item"> 
        <div class="card"> 
         <div class="num${index} frontCard">
            <img class="image" src="./images/work.jpg">
            <h1 class="name">${obj.name}</h1>
            <p class"company">${obj.company.bs} </p>
            <h4 class="email">${obj.email} </h4>
            
            <ul class="social-icons">
            <a href="mailto:${obj.email}" target="_blank"><i class="fa fa-envelope"></i></a>
            <a href="tel:${obj.phone}" target="_blank"><i class="fa fa-whatsapp"></i></a>
            <a href="https://github.com/xValeryx" target="_blank"><i class="fa fa-github"></i></a>
            <a href="http://www.linkedin.com" target="_blank"><i class="fa fa-linkedin"></i></a>
            </ul>
          </div> 
         <div class="num${index} backCard">
            <h2 class="username">${obj.username} </h2>
            <h3 class"company">${obj.company.catchPhrase} </h3>
            <p class"address"> <i class="fa fa-globe"></i> ${obj.address.city}  </p>
          </div>
       </div>
      </div> 
  </div>`).join("");

 

  /*

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () =>   {
    
      card.classList.toggle("flip");
    });
  });

  */
 
};


// Flip card  - wrapper1

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () =>   {
  
    card.classList.toggle("flip");
  });
});


/* - - - -  - - - -  - SEZIONE 2  -  - - - - - - - */



//****  UTENTI NON ABILITATI - WRAPPER2 *****//

const newCard = (data) => {

  wrapper2.innerHTML = data
    .filter((item) => item.active === false)
    .map(
      (obj, index) =>
    `<div class="wrapper-item2"> 
        <div class="card"> 
     <div class="num${index} frontCard">
        <img class="image" src="./images/group.jpg">
        <h1 class="name">${obj.name}</h1>
        <p class"company">${obj.company.bs} </p>
        <h4 class="email">${obj.email} </h4>
        
        <ul class="social-icons">
        <a href="mailto:${obj.email}" target="_blank"><i class="fa fa-envelope"></i></a>
        <a href="tel:${obj.phone}" target="_blank"><i class="fa fa-whatsapp"></i></a>
        <a href="https://github.com/xValeryx" target="_blank"><i class="fa fa-github"></i></a>
        <a href="http://www.linkedin.com" target="_blank"><i class="fa fa-linkedin"></i></a>
        </ul>
      </div> 
    <div class="num${index} backCard">
      <h2 class="username">${obj.username} </h2>
      <h3 class"company">${obj.company.catchPhrase} </h3>
      <p class"address"> <i class="fa fa-globe"></i> ${obj.address.city} </p>
    </div>
 </div>
 </div>`).join("");


  // Flip card 

  const cards = document.querySelectorAll(".card");

  function flipCard() {
    this.classList.toggle("flip");
  }

  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });



};


// 