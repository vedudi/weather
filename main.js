const cityInput=document.querySelector(".inputText")
const btn=document.querySelector(".btn")


btn.addEventListener("click",()=>{
 const  cityName= cityInput.value
 getData(cityName)
})
function getData(name) {
    const API="796320e5143fefe3e9009a0f86d3ee33"
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
    
    fetch(baseURL)
    .then(res=>res.json())
    .then(data=>{
        const {name, sys:{country}, main: {temp, feels_like, humidity}, weather:[{description}], wind:{speed}}=data
         
          const city=document.querySelector(".city")
          const temperature=document.querySelector(".temp")
          const hum=document.querySelector(".humidity")
          const wind=document.querySelector(".wind")
          const weatherDesc=document.querySelector(".weather")
          const feeling=document.querySelector(".feeling")

          city.textContent=`${name.toUpperCase()},${country}`
          temperature.innerHTML=`${temp.toFixed(0)}<sup>°</sup>`
          hum.textContent=`nem: % ${country}`
          wind.innerHTML=`rüzgar: ${country} km/h`
          weatherDesc.innerHTML=`<i>gökyüzü : ${description.toUpperCase()}</i>`
          feeling.innerHTML=`hissedilen: ${feels_like.toFixed(0)} <sup>°</sup>`

    })
    
    cityInput.value=""
    cityInput.focus()
}