class Base {
  sayHello() {
    console.log('Hello')
  }
  // 当父级的方法为箭头函数时,子孙重写会失效
  sayHey = () => {
    console.log('Hey in Base')
  }
}

class A extends Base {
  constructor() {
    super()
    this.name = 'Bitch'
  }
  
  sayHey() {
    console.log('Hey', this.name)
  }
}


new A().sayHey()