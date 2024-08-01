type Producto = {
    id: number;
    nombre: string;
    precio: number;
};
// El tipado nos ayuda a especificar los tipos de las variables que vamo sa recibir para asegurarnos de aplicar correctamente las operaciones
function parImpar(a:number){
    let aVer:number= a%2
    let isPar:boolean= aVer == 0 
    if (isPar){
        return "Par"
    }
    else{
        return"Impar"
    }
};
console.log(parImpar(2));
console.log(parImpar(3));

const number1:number = 5;
const number2:number = -5;
const number3:number = 0;

function numberCla(a:number){
    if (a>0){
        return"Positivo"
    }
    else if(a<0){
        return "Negativo"
    }
    else{return "Cero"}
};

function numberCla2(a: number){
    switch(true){
        case(a>0):
            console.log("Positivo")
            break;
        
        case(a<0):
            console.log("Negativo")
            break;
        default:
            console.log("Cero")
            break;
        }
    };
console.log(numberCla(number1));
console.log(numberCla(number2));
console.log(numberCla(number3));


numberCla2(number1);
numberCla2(number2);
numberCla2(number3);

let names:string[] = ["lachuchita","ladamioneta","layeyopolis"];
for (let i=0;i< names.length;i++){
    console.log(names[i])
};
let numbers:number[]=[1,2,3,4,5,6,7,8,9,10]
let sum:number = numbers.reduce((anterior,siguiente)=>anterior+siguiente)
console.log(sum)
function concat(a:string[]){
    return a.reduce((acum,siguiente)=>acum+siguiente)
};
let texto:string[]=["Chavalillo ","de ","la ","montaña"]
console.log(concat(texto))
type Users={ name:string;
    id:number
};
const users:Users[]= [{name:"lachuchita",id:1},{name:"layeyopolis",id:2},{name:"ladamioneta",id:3}];
users.forEach(a=> console.log(a.name))
const numbersFil:number[] = [1,2,3,4,5,6,7,8];
const menor:number = numbersFil.reduce((menor,siguiente)=>menor<siguiente? menor:siguiente)
const mayor:number = numbersFil.reduce((mayor,siguiente)=>mayor>siguiente? mayor:siguiente)
console.log(menor,mayor)
// Se asegura poniendo la sentencia number antes de definir el array
interface car {
    marca:string;
    modelo:string;
    año:number  
};

let chevete :car={
    marca:"chevitaxi",
    modelo:"chevetron",
    año:1990
};
console.log(chevete)

class carInfo{
    static getCarInfo(car:car):string{
    return`${car.marca} ${car.modelo} - ${car.año}`};
};

console.log(carInfo.getCarInfo(chevete));

function restParam(a:number,b:number){
    if(typeof(a) && typeof(b)=="number"){
        return a*b
    }
    else{return("los parametros ingresados no son tipo number")}
};
console.log(restParam(2,"3"));

