// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
let conteneur = document.getElementById('contenu')
journaux.forEach(function (journal) {
    let link =document.createElement('a');

    link.textContent=journal + " ";
    link.href = journal;
    conteneur.appendChild(link)
    conteneur.appendChild(document.createElement('br'))
})