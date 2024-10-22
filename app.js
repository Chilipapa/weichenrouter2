async function main() {
    
    const gesCodeObj = document.querySelector(".derGanzeCode");
    gesCodeObj.innerHTML = "Code noch nicht erstellt";
    const layoutCode = await liefereCode("layout.txt");
  
    let code1 = await liefereCode("code1.txt");
    let code2 = await liefereCodeAbschnittAusLayout(
      layoutCode,
      "//####XX_short_arrays_XX",
      "//####XX_case_zeilen_XX"
    );
    let code3 = await liefereCode("code3.txt");
    let code4 = await liefereCodeAbschnittAusLayout(
      layoutCode,
      "//####XX_case_zeilen_XX",
      "//####XX_ENDE_XX"
    );
    let code5 = await liefereCode("code5.txt");
  
    let codeGesamt = code1
      .concat(code2)
      .concat(code3)
      .concat(code4)
      .concat(code5);
    const codeGesamtAlsString = codeGesamt.join("<br>");
  
    gesCodeObj.innerHTML = codeGesamtAlsString;
  

    ///// hier beginnt der Funktionen-Teil
    async function liefereCodeAbschnittAusLayout(
      layoutCodeArray,
      startString,
      endString
    ) {
      let rueckgabeArray = [];
      let gehoertDazu = false;
  
      layoutCodeArray.forEach(function (zeile) {
        if (zeile.trim() === startString.trim()) {
          gehoertDazu = true;
        }
        if (zeile.trim() === endString.trim()) {
          gehoertDazu = false;
        }
        if (gehoertDazu) {
          rueckgabeArray.push(zeile);
        }
      });
      // Rückgabe des Arrays nach Abschluss der forEach-Schleife
      return rueckgabeArray; // erstes Element entfernen
    }
  

  
    async function liefereCode(textDatei) {
      try {
        const response = await fetch(textDatei);
        const text = await response.text();
        const dateiTextAlsArray = text.split(/\r?\n/);
        return dateiTextAlsArray; // Rückgabe des Arrays nach erfolgreichem fetch
      } catch (error) {
        console.error("Fehler beim Abrufen der Datei:", error);
      }
    }
  }
  
  main(); // Die Hauptfunktion aufrufen
  