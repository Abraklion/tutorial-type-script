
/* Переменные по TypeScript */

let a: string = 'Николай' // -> строка

let b: number = 32 // -> число

let c: boolean = true // -> логический



let g: string = undefined // -> не определено (по умолжанию к любому типу данных)
g = null // -> присваевается к любому типу данных

let s: number = null // -> ничего (по умолжанию подходит к любому типу данных)
s = undefined // -> присваевается к любому типу данных


let array : string[] = ['Привет', 'Мир'] // -> массив строкового типа v1
let arrayV2 : Array<string> = ['Привет', 'Мир'] // -> массив строкового типа v2

let array2 : number[] = [10, 2.5] // -> массив числового типа
let array2V2 : Array<number> = [10, 2.5] // -> массив числового типа v2


let cort: [string, number] = ['Мир', 1] // -> кортеж


let x: any = 'Николай' // -> любой тип данных
x = 10

enum Direction { // -> перечисление
  Up = 1, //-> index начиная с 1
  Down,
  Left,
  Right,
}

enum Days {  // -> перечисление со строками
  Monday = 'Hello',
  Tuesday = 'Word',
}
