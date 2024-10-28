# Pantry Picks

Pantry Picks on verkkosovellus, joka auttaa käyttäjiä löytämään reseptejä käyttämällä ainesosia, joita heillä on jo valmiiksi kotona. Käyttäjä syöttää haluamansa ainesosan, ja sovellus hakee kolmannen osapuolen reseptirajapinnasta (TheMealDB) reseptejä, jotka sisältävät kyseisen ainesosan.

## Ominaisuudet
- Hakutoiminto: Käyttäjä voi syöttää yhden ainesosan ja hakea siihen sopivia reseptejä.
- Responsiivinen käyttöliittymä: Sovellus on suunniteltu responsiiviseksi, ja sen ulkoasu mukautuu eri kokoisille näytöille.
- Korttinäkymä: Hakutulokset esitetään kortteina, joissa näkyy ruokalajin nimi ja kuva.

## Käytetyt teknologiat
- HTML ja CSS verkkosivun rakenteen ja ulkoasun toteutukseen
- JavaScript tietojen hakemiseen ja näyttämiseen
- Bootstrap käyttöliittymän responsiivisuuden parantamiseen
- TheMealDB API reseptitietojen hakemiseen

## Asennusohjeet

1. **Kloonaa** tämä repositorio paikallisesti:
    git clone https://github.com/idapitkanen/pantrypicks.git

2. **Navigoi** projektin juurikansioon:
    patrypicks

3. **Muokkaa** js-tiedoston riville 6 api_key muuttujan arvoksi "1" 

4. **Avaa** `index.html` tiedosto selaimessa, jolloin voit käyttää sovellusta paikallisesti.

## Käyttöohjeet

1. Käyttäjä kirjoittaa haluamansa ainesosan tekstikenttään (esim. "chicken"). Käyttöliittymä toimii vain englanniksi.
2. Painamalla hakupainiketta, sovellus hakee ja näyttää listan resepteistä, jotka sisältävät kyseisen ainesosan.
3. Hakutulokset näkyvät korttinäkymässä, jossa kussakin kortissa on reseptin nimi ja kuva.

## Tiedostorakenne

- `index.html` — Sovelluksen HTML-rakenne
- `css/style.css` — CSS-tyylitiedosto, joka hallitsee käyttöliittymän ulkoasua ja tyylejä
- `js/functions.js` — JavaScript-tiedosto, jossa määritellään hakutoiminto, rajapintakutsu ja tulosten näyttäminen

## Virheenkäsittely
Mikäli reseptitietojen haku epäonnistuu, käyttäjälle näytetään virheilmoitus, joka pyytää yrittämään uudelleen.
Jos hakusanalla ei löytynyt reseptejä, käyttäjälle näytetään ilmoitus ettei mitään löytynyt. 