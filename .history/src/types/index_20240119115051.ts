// 定义一个接口，用于限制person对象的具体属性,分别暴露
export interface PersonInter {
  id: string,
  name: string,
  age: number
}


// 一个自定义类型
//export type Persons = Array<PersonInter>