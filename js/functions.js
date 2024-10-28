const input = document.querySelector("input")
const search_button = document.querySelector("button")
const output = document.querySelector("output")

const url = 'www.themealdb.com/api/json/v1'
const api_key = "add api key"


//funktio datan hakuun rajapinnasta
const getData = async () => {
    // inputina saatu arvo oikeaan muotoon 
    const ingredient = input.value.replaceAll(" ","_")
    // muodostetaan osoite urlista, apiavaimesta ja käyttäjän antamasta tiedosta
    const address = `https://${url}/${api_key}//filter.php?i=${ingredient}`

    // yritetään hakea dataa käyttämällä fetch funktiota
    try {
        const response = await fetch(address) // jos haku onnistuu saadaan palautteena "ok"
        
        // jos vastaus ei ole ok näytetään virheviesti
        if (!response.ok) {
            throw new Error("Data fetch failed")
        }
        //tallennetaan data omaan muuttujaan
        const data = await response.json()

        //näytetään tulokset outputissa
        showResults(data.meals)

        // virhekäsittely siinä tapauksessa ettei datan haku onnistunut
    } catch (error) {
        console.error("Error fetching data:", error)
        output.innerHTML = "<p>Failed to load recipes. Please try again.</p>"
    }

}


//funktio tulosten esittämiseen
const showResults = (meals) => {
    output.innerHTML = ""; // Tyhjennetään aiemmat tulokset näytöltä

    // jos reseptejä ei löydy, annetaan tieto käyttäjälle
    if (!meals) {
        output.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    // jos reseptejä löytyy, luodaan osio jossa jolla tuloksia esitellään
    const row = document.createElement("div")
    row.classList.add("row", "justify-content-center", "g-3")

    // käydään kaikki haussa saadut tulokset läpi
    meals.forEach(meal => {
        const mealCol = document.createElement("div")
        //skaalataan tulokset eri kokoisille näytöille
        mealCol.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3") 

        //määritellään 'resepti-kortin' sisältö html:nä
        mealCol.innerHTML = `
            <div class="card h-80 text-center">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="card-img-top" style="max-height: 200px">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                </div>
            </div>
        `
        
        row.appendChild(mealCol)
    });

    output.appendChild(row) // Lisätään rivit output-elementtiin
};


// kun nappia painetaan, käynnistyy datan haku
search_button.addEventListener('click', () => {
    getData()
})

