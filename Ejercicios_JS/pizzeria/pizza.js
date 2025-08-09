

function pizzaOven(tipoNombre, tipoSalsa, quesos, tipoIngredientes) {
    var pizza = {
        nombre: tipoNombre,
        salsa: tipoSalsa,
        quesos: quesos, 
        ingredientes: tipoIngredientes
    };
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", "mozzarella" ,["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("todas las carnes", "tradicional", "mozzarella" ,["pepperoni", "salchicha"]);
console.log(pizza3);

var pizza4 = pizzaOven("churrasco", "tradicional", "mozzarella" ,["pepperoni", "salchicha"]);
console.log(pizza4);