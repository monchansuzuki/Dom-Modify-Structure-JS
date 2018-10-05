let cEle = document.createElement('li');
cEle.textContent = 'C';
document.getElementById('php').appendChild(cEle);

let wikiLink = document.createElement('a');
wikiLink.text='list';
wikiLink.id = 'link-wiki';
wikiLink.href = 'https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation';

let wikiP = document .createElement('p');
wikiP.textContent = 'En voici une ' + wikiLink.innerHTML + ' plus exaustive';

document.getElementById('contenu').appendChild(wikiP);
