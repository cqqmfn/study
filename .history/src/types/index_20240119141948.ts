// 定义一个接口，用于限制person对象的具体属性,分别暴露
export interface PersonInter {
  id: string,
  name: string,
  age: number,
  x: number
}

//高级点写法：
// 一个自定义类型
//export type Persons = Array<PersonInter>
//简洁写法
export type Persons = PersonInter[]
