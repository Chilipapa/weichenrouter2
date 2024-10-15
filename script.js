const objektWoerterListe = document.querySelector(".objekt_liste_html");
let woerter_liste = ["w1","w2","w3","w4","w5","w6","w7","w8","w9"];

objektWoerterListe.innerHTML = woerter_liste.join("<br>");



fetch("code_ende.txt")
    .then(function(response){return response.text();})
    .then(function(text){woerter_liste = text.split(",");
                         console.log(woerter_liste);
    });


