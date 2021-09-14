// Write your JavaScript code here! 
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

let map = new Map();
planets.forEach(planet => map.set(planet[0], planet[1]));

var select = document.getElementById('planets'); 
planets.slice().reverse().forEach(createOption); 

function createOption(planet) { 
    var option = planet[0];
    var element = document.createElement('option');
    element.textContent = option; 
    element.value = option; 
    select.appendChild(element);
}

function calculateWeight(weight, planetName) { 
    return map.get(planetName) * weight; 
    
} 

function handleClickEvent(e) {
     // 3. Create a variable called userWeight and assign the value of the user's weight. 
     var userWeight =  document.getElementById('user-weight').value;
     // 4. Create a variable called planetName and assign the name of the selected planet from the drop down. 
     var planetName = document.getElementById("planets").value;
    // 5. Create a variable called result and assign the value of the new calculated weight. 
    var result = this.calculateWeight(userWeight, planetName);
    // 6. Write code to display the message shown in the screenshot. 
    document.getElementById('output').innerHTML = "<b>If you were on " +"<span style=\"color:red\">" +  planetName + "</span>" + ", you would weigh " + "<span style=\"color:red\">" +  result +"lbs!</b>" + "</span>";
} 

    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.
