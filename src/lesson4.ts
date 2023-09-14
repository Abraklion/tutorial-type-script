
// Пример 1

function func(a: number, b: number) : number {
  // code function

  return a + b;
}

console.log(func(1,100))



// Пример 2

let c = function (a: number, b: number) : number {
  return a + b;
}

console.log(c(2,100))



// Пример 3

let j : number;
let w = function (a: number, b: number) : void {
  j =  a + b;
}

w(3,10)
console.log(j)



// Пример 4

let d = function (a: number, b: number, c?: string) : string {
  console.log(c)
  return  a + ' ' + b;
}

console.log(d(4,20))



// Пример 5

let v = function (a: number, b: number, c: string = 'По умолчанию') : string {
  console.log(c)
  return  a + ' ' + b;
}

console.log(v(5,20))



// Пример 6

function f1() : string {
  return `Привет мир`
}

let l = function (a: number, b: number, c: string = f1()) : string {
  console.log(c)
  return  a + ' ' + b;
}

console.log(l(6,20))


// Пример 7


let h = function (a: number, b: number, ...c: Array<number> ) : string {

  for (let i = 0; i < c.length; i++) {
    console.log(c[i])
  }

  return  a + ' ' + b;
}

console.log(h(7,20,1, 2, 3))











export {}
