// const loadPhones = async(searchText,searchLimit) =>{
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhone(data.data,searchLimit);
// }

const loadData = async() =>{
    const url = `https://restcountries.com/v3.1/all`
    const res = await fetch(url)
    const data = await res.json();
    displayData(data)
}


const displayData = countrys =>{
    console.log(countrys)
    const allCountiesHtml = countrys.map(country =>getCountryHtml(country))
    console.log(allCountiesHtml[0])
    const container = document.getElementById('countries')
    container.innerHTML = allCountiesHtml.join(' ')
}

const getCountryHtml = country =>{
    return`
    <div class="country">
        <h2>NAME: ${country.name.common}</h2>
        <h2>CAPITAL: ${country?.capital}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}


loadData()