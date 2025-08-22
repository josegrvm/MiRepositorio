// Desestructuración en objetos anidados

const info = {
  personal: {
    nombre: "Carlos",
    apellido: "Vega",
    detalles: {
      edad: 30,
      ocupacion: "Ingeniero",
    },
  },
};

const {
  personal: {
    detalles: { edad, salario },
  },
} = info;
console.log(edad);
console.log(salario);

// Uso del operador spread en la fusión de objetos

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);

// Ámbito de variables en funciones y bloques

const verificar = () => {
  if (true) {
    const a = 2;
    let b = 3;
    var c = 4;
  }
  console.log(c);
  console.log(a);
  console.log(b);
};
verificar();

// Propiedades de objetos inmutables

const datos = Object.freeze({ nombre: "Luis", edad: 29 });
datos.edad = 30;
console.log(datos.edad);

// Manipulación de arreglos sin modificar el original

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);

// Acceso a elementos de un arreglo con destructuración

const frutas = ["manzana", "naranja", "pera", "mango"];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);

// Comportamiento del ámbito de let en bucles anidados

for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 2; i++) {
    console.log(i);
  }
}
// Uso del operador spread para combinar arreglos
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);
// Alcance y captura de variables dentro de una función
const demostracion = () => {
  var nombre = "Ana";
  let edad = 25;
  if (true) {
    var nombre = "Luis";
    let edad = 30;
  }
  console.log(nombre);
  console.log(edad);
};
demostracion();
