let rates = {
    emerytalna: 0.0976,
    rentowa: 0.015,
    chorobowa: 0.0245,
    zdrowotna: 0.09,
    pit: 0.12
};

fetch('rates.json')
    .then(resp => resp.json())
    .then(data => {
        rates = data;
        document.getElementById('ratesDisplay').textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        document.getElementById('ratesDisplay').textContent = JSON.stringify(rates, null, 2);
    });

function calculate(under26) {
    const brutto = parseFloat(document.getElementById('brutto').value);
    if (isNaN(brutto) || brutto <= 0) {
        document.getElementById('result').textContent = "Podaj poprawną kwotę brutto.";
        return;
    }

    const skladkiSpoleczne = brutto * (rates.emerytalna + rates.rentowa + rates.chorobowa);
    const podstawa = brutto - skladkiSpoleczne;
    const podatek = under26 ? 0 : podstawa * rates.pit;
    const zdrowotna = brutto * rates.zdrowotna;
    const netto = brutto - skladkiSpoleczne - zdrowotna - podatek;

    document.getElementById('result').textContent = `Kwota netto: ${netto.toFixed(2)} zł`;
}
