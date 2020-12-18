var button = document.querySelector(".button");
var inputvalue = document.querySelector(".inputvalue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");





button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&units=metric&appid=f2ab0dbe823043f19fa0e2ba9df0ec4f'
     )
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
    
      name.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML =  tempValue;
     
     
   
    
      
     
    })
    
    .catch(err => alert("Wrong city name!"));
    })