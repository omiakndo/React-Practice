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


const displayData = country =>{
    console.log(country)
}




loadData()