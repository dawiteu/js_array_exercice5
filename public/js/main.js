let age = 23; 

let tabExo = ['text', age, 4, 5, vrai=false]; 
console.log(tabExo);

console.log(tabExo.length); 

tabExo.pop(); 

console.log(tabExo); 

tabExo.shift();

console.log(tabExo); 

tabExo.push("A", age); 

console.log(tabExo);

tabExo.unshift("DawiT",".","eu"); 

console.log(tabExo);


tabExo = tabExo.reverse();

console.log(tabExo+ "\n---------------");






let affaires = Array(); 

affaires[0] = 'chargeur'; 
affaires[1] = 'ordinateur'; 

//alert(affaires.join());

affaires.unshift("etui de pc"); 

//alert(affaires.join());

// Il attrape 3 objets et décidera de les mettre tout au fond de la boite ???

affaires.push("a", "b", "c");
//alert(affaires.length);
affaires.splice(0,3); 
affaires.push("x"); 
//alert(affaires.length);
affaires.splice(affaires.length-2,affaires.length);
affaires.splice(0,2);
//alert(affaires);


//console.log(affaires);


