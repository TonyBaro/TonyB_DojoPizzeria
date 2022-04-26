var PizzaDict={
    crusts : ["deepdish", "hand tossed" , "pan" , "thin"],
    sauce : ["traditional", "marinara", "white"],
    cheese : ["mozzerella" , "feta" , "provalone"],
    toppin : ["pepperoni" , "sausage" , "mushrooms" , "olives" , "onions" , "chicken" , "pineapple" , "banana pepper" , "jalepenos" ]
}

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}

function randomPizza(){
    var pizza={};
    pizza.crustType = PizzaDict.crusts[Math.floor(Math.random()*PizzaDict.crusts.length)];
    pizza.sauceType = PizzaDict.sauce[Math.floor(Math.random()*PizzaDict.sauce.length)];
    pizza.cheeses = PizzaDict.cheese[Math.floor(Math.random()*PizzaDict.cheese.length)];
    pizza.toppings =[];
        for (var i=0; i<Math.floor(Math.random()*PizzaDict.toppin.length); i++){
            pizza.toppings.push(PizzaDict.toppin[Math.floor(Math.random()*PizzaDict.toppin.length)])
        };
    return pizza
}




var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"] , ["pepperoni","sausage"]);
console.log(p1)

var p2 =pizzaOven("hand tossed", "marinara" , ["mozzeralla","feta"],["mushrooms","olives","onions"])
console.log(p2)

var p3 =pizzaOven("pan", "marinara" , ["mozzeralla"],["mushrooms","olives","banana peppers"])
console.log(p3)

var p4 =pizzaOven("thin", "white" , ["provalone","feta"],["chicken","pineapple","anchovies","jalepenos"])
console.log(p4)

var pr =randomPizza()
console.log(pr)