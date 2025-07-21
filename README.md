# Kalkulator Netto (Brutto -> Netto)

Prosty kalkulator brutto -> netto z wyborem grupy wiekowej (poniżej 26 lat / 26 lat i więcej) i automatycznym pobieraniem stawek z pliku `rates.json`.

## Uruchomienie lokalne
1. Rozpakuj projekt.
2. Otwórz plik `index.html` w przeglądarce.
   - Jeśli nie działa pobieranie `rates.json`, uruchom:
     ```bash
     python -m http.server 8000
     ```
     i wejdź na `http://localhost:8000`.

## Publikacja na GitHub Pages
1. Utwórz nowe repozytorium na GitHub.
2. Prześlij wszystkie pliki (`index.html`, `style.css`, `script.js`, `rates.json`, `README.md`).
3. W repozytorium przejdź do **Settings → Pages**, ustaw Source na `main` i folder `/ (root)`.
4. Strona będzie dostępna pod `https://twojanazwa.github.io/nazwa-repozytorium`.
