async function main() {
    const gesCodeObj = document.querySelector(".derGanzeCode");
  
    const layoutCode = await liefereCode("layout.txt");
  
    const code1 = await liefereCode("code1.txt");
    const code2 = await liefereCodeAbschnittAusLayout(
      layoutCode,
      "####XX_short_arrays_XX",
      "####XX_case_zeilen_XX"
    );
    //const code22 = await liefereCode4(layoutCode);
    const code3 = await liefereCode("code3.txt");
    //const code41 = await liefereCode4(layoutCode);
    const code4 = await liefereCodeAbschnittAusLayout(
      layoutCode,
      "####XX_case_zeilen_XX",
      "####XX_ENDE_XX"
    );
    const code5 = await liefereCode("code5.txt");
  
    const codeGesamt = code1
      .concat(code2)
      .concat(code3)
      .concat(code4)
      .concat(code5);
    const codeGesamtAlsString = codeGesamt.join("<br>");
  
    gesCodeObj.innerHTML = codeGesamtAlsString;
  
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
      return rueckgabeArray;
    }
  
    async function liefereCode4(layoutCode) {
      //####XX_short_arrays_XX
      //####XX_case_zeilen_XX
      //####XX_ENDE_XX
      const gewuenschterCodeTeil = [layoutCode[7]];
      return [gewuenschterCodeTeil];
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
  