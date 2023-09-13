
let a : string | number // -> строка или число

a = 10


type numberOrBoolean = number | boolean // -> псевдоним для типов

let c : numberOrBoolean = 10;
let d : numberOrBoolean = true;


// Приведения типов

let value : any = '100'

let result : number = (<string> value).length // -> приводим value к строке

let result1 : number = (value as string).length // -> приводим value к строке


let value1 : string | number = '100'

let result2 : number = (value1 as unknown as string).length


let t : any = 10 // -> можно присваевать лубому типу
let f : unknown = 10 // -> не приписываются ничему, кроме any

let b : string = t  // -> не вывызит ошибку
// let w : string = f  // -> вывызит ошибку



export {};


