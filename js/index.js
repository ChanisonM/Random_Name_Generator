var firstName = [
  "Orville",
  "Olga",
  "Stuart",
  "Owen",
  "Cameron",
  "Carol",
  "Wiley",
  "Cordell",
  "Elvera",
  "Elenora",
  "Camron",
  "Alice",
  "Jaquan",
  "Violet",
  "Kaci",
];
var lastName = [
  "Hahn",
  "Will",
  "Bernier",
  "Sauer",
  "Huel",
  "Marvin",
  "Hahn",
  "Christiansen",
  "Johnson",
  "Green",
  "Nader",
  "Alice",
  "Bayer",
  "Champlin",
  "Batz",
];

var MaxlengthNanme = 20

document.querySelector('.title').innerText = `How many times would you like to generator (up to ${MaxlengthNanme})`



function func_getName(){
    var randomName = `${firstName[Math.floor(Math.random() * firstName.length)]}  ${lastName[Math.floor(Math.random() * lastName.length)]}`
    return randomName
}

function func_nameQty(){
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = ""
    if(userQty > MaxlengthNanme){
        document.querySelector('.nameList').innerHTML = `ONLY ${MaxlengthNanme} NAME CAN BE GENERATE`
    }else{
        for (let i = 0; i < userQty; i++) {
            document.querySelector('.nameList').innerHTML += func_getName() + '<br>'
            
        }
    }

    
}
