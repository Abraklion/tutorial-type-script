/// <reference path="someModule.ts" />

let index = new Pages.Page('Hello')
console.log(index)

import innerModal = Pages.Inner
console.log(innerModal.name)

import names = Pages.Inner.name
console.log(names)
