
// Перегрузка функции

function sum(a: number, b: number) : number
function sum(a: string, b: string) : string

function sum(a: any, b: any) : any {
  return a + b
}

console.log(sum(10,15))
console.log(sum('Привет','Мир'))



// Тип функции

let action : (a: number, b: number) => number

function f1(a: number, b:number) : number  {
  return a + b
}

function f2(a: number, b:number) : number  {
  return a * b
}

action = f1
console.log(action(10,10))


action = f2
console.log(action(10,10))


// Тип функции 2

function f4(x: number,y: number) : string {
  return `${x} + ${y} = ${x + y}`
}

function f3(a: number, b: number, callback : (x : number, y: number) => string) : string {
  return callback(a,b)
}

console.log(f3(100,10,(x: number,y: number) : string => {
  return `${x} + ${y} = ${x + y}`
}))

console.log(f3(100,100,f4))



// Стрелочные функции

let f5 = (a: number, b: number) : number => {
  return a + b
}

console.log(f5(100,100))
































export {}
