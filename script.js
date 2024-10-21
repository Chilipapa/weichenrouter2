// const objektWoerterListe = document.querySelector(".objekt_liste_html");
// let woerter_liste = ["w1","w2","w3","w4","w5","w6","w7","w8","w9"];
// let neuer_string;

// fetch("code_ende.txt")
//     .then(function(response){return response.text();})
//     .then(function(text){neuer_string= text.split(",");
//     });

// console.log("neue_liste");
// console.log(neue_liste);
// console.log("ende_neue_liste");
// objektWoerterListe.innerHTML = woerter_liste.join("<br>");

document.getElementById("fetch-btn").addEventListener("click", () => {
  fetch("code_ende.txt") // Replace 'sample.txt' with your file path
    .then((response) => response.text()) // Get the text from the response
    .then((data) => {
      document.getElementById("output").innerText = data; // Display the text in a div
    })
    .catch((error) => {
      console.error("Error fetching the text file:", error);
      document.getElementById("output").innerText = "Error loading file.";
    });
});

