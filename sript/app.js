// Les variables pour stoquer les éléments 

const touch = [...document.querySelectorAll('.btn')];
const list = touch.map(e => e.dataset.key);
const screem = document.querySelector('.screem');


// Récupération des valeurs

document.addEventListener('keydown', (e) => {
  const v = e.key;
  calculed(v);
});

document.addEventListener('click', (e) => {
  const v = e.target.dataset.key;
  calculed(v);

});

// Fonction qui calcule 

const calculed = (val) => {
  if(list.includes(val)) {
    switch(val){
      case '8':
        screem.textContent = "";
        break;
      case'13':
        const calcul = eval(screem.textContent);
        screem.textContent = calcul;
        break;
      default: 
        const indexKeyCode = list.indexOf(val);
        const touche = touch[indexKeyCode];
        screem.textContent += touche.innerHTML;
    }
  }
};

//Affichage à l'écran quand il y'a une erreur

window.addEventListener('error', e => {
  alert('Veuillez saisir un nombre : ' + e.message);
})