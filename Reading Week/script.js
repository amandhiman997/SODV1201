//Basic Promise Practice

let promise = new Promise((resolve,reject) => {
    let YouStudying = true;
    if(YouStudying){
        resolve('yes');
    }
    else{
        reject( 'no');
    }
});

promise.then(function(fromResolve) {
    console.log('we are studying ' + fromResolve );
}).catch(function(fromreject){
    console.log('we are studying ' + fromreject);
});

// Using "https://swapi.co/api/starships" API to get the starships Data 

function starShipsData(url) {
    return new Promise(function(resolve,reject) {
        return fetch(url).then(function (data) {
            const json = data.json();
            if(json){
                resolve(json);
            }
            else{
                reject("No data Available");
            }
        });
    });
}
// Fetching the Results from URL
starShipsData("https://swapi.co/api/starships").then(function (data) {
    console.log(data.results);
    const results = data.results;
    printStarShipsData(results);
}).catch(function(err){
    console.error("error: ", err);
});

// Printing the data to the Page 
function printStarShipsData(arr) {
    arr.forEach(function(ships) {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const app = document.getElementById("ships");
        h1.appendChild(document.createTextNode(ships.name));
        p.appendChild(document.createTextNode("Starship Class: " + ships.starship_class));
        div.appendChild(document.createTextNode("Starship Manufacturer: " + ships.manufacturer));
        div.appendChild(h1);
        div.appendChild(p);
        app.appendChild(div);
    });
}
    
