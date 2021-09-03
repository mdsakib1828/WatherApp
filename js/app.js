const API_KEY = `54e791daa00c0b4abb4dd312188a0cf5`;
const searchTeaperature = () =>{
    const city = document.getElementById("city_name");
    const city_text = city.value;
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city_text}&appid=${API_KEY}&units=metric`;
    city.value = '';
    fetch(Url)
      .then((res) => res.json())
      .then((data) => displayTempareture(data));
}

const setCityName = (id,text) =>{
    document.getElementById(id).innerText = text;
}

const displayTempareture = temp =>{

    console.log(temp);
    console.log(temp.cod);
    if (temp.cod === '404') {
      alert('please enter a valid city name');
      
    }
    else{

    setCityName('city',temp.name);
    setCityName("temperature", temp.main.temp);
    setCityName("condition", temp.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("Weather_icon");
    imgIcon.setAttribute('src',url);
    }

}