let sales : number = 123_456_789;
let course : string = 'TypeScript';
let is_published: boolean = true;

function render(document: string) {
    console.log(document);
}

let nums : number[] = [1,2,3];
let objects = [1,'hey', {id: 5}]
let array = [];

let user: [number,string] = [1, 'Mosh'];


const enum Size {
    Small = 1,
    Medium = 2,
    Large = 3,
}

let mySize : Size = Size.Medium;
console.log(mySize);


function calculateTax(income: number) : number | undefined {
    if(income < 50_000){
        return 0;
    }
}

function calc(income:number = 300) {
    return income+100;
}

type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date) => void;
}

function kgToLbs(weight: number | string) : number {
    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    else{
        return parseInt(weight) * 2.2;
    }
}

console.log("automation")

console.log("automation")
console.log("automation")
console.log("automation")
console.log("automation")

console.log("automation")
console.log("automation")
console.log("automation")
