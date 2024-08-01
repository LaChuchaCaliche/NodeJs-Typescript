// El tipado nos ayuda a especificar los tipos de las variables que vamo sa recibir para asegurarnos de aplicar correctamente las operaciones
function parImpar(a) {
    var aVer = a % 2;
    var isPar = aVer == 0;
    if (isPar) {
        return "Par";
    }
    else {
        return "Impar";
    }
}
;
console.log(parImpar(2));
console.log(parImpar(3));
var number1 = 5;
var number2 = -5;
var number3 = 0;
function numberCla(a) {
    if (a > 0) {
        return "Positivo";
    }
    else if (a < 0) {
        return "Negativo";
    }
    else {
        return "Cero";
    }
}
;
function numberCla2(a) {
    switch (true) {
        case (a > 0):
            console.log("Positivo");
            break;
        case (a < 0):
            console.log("Negativo");
            break;
        default:
            console.log("Cero");
            break;
    }
}
;
console.log(numberCla(number1));
console.log(numberCla(number2));
console.log(numberCla(number3));
numberCla2(number1);
numberCla2(number2);
numberCla2(number3);
var names = ["lachuchita", "ladamioneta", "layeyopolis"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.reduce(function (anterior, siguiente) { return anterior + siguiente; });
console.log(sum);
function concat(a) {
    return a.reduce(function (acum, siguiente) { return acum + siguiente; });
}
;
var texto = ["Chavalillo ", "de ", "la ", "montaña"];
console.log(concat(texto));
var users = [{ name: "lachuchita", id: 1 }, { name: "layeyopolis", id: 2 }, { name: "ladamioneta", id: 3 }];
users.forEach(function (a) { return console.log(a.name); });
var numbersFil = [1, 2, 3, 4, 5, 6, 7, 8];
var menor = numbersFil.reduce(function (menor, siguiente) { return menor < siguiente ? menor : siguiente; });
var mayor = numbersFil.reduce(function (mayor, siguiente) { return mayor > siguiente ? mayor : siguiente; });
console.log(menor, mayor);
;
var chevete = {
    marca: "chevitaxi",
    modelo: "chevetron",
    año: 1990
};
console.log(chevete);
var carInfo = /** @class */ (function () {
    function carInfo() {
    }
    carInfo.getCarInfo = function (car) {
        return "".concat(car.marca, " ").concat(car.modelo, " - ").concat(car.año);
    };
    ;
    return carInfo;
}());
;
console.log(carInfo.getCarInfo(chevete));
function restParam(a, b) {
    if (typeof (a) && typeof (b) == "number") {
        return a * b;
    }
    else {
        return ("los parametros ingresados no son tipo number");
    }
}
;
console.log(restParam(2, "3"));
