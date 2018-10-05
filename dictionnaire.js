// Liste des mots du dictionnaire
let mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
mots.forEach(function (article) {
    let titre = document.createElement('h1');
    let def = document.createElement('p');
    titre.textContent=article.terme;
    def.textContent=article.definition;
    document.getElementById('contenu').appendChild(titre);
    document.getElementById('contenu').appendChild(def);

})