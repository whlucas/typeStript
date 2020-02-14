class User6 {
    _age: number
    name: string
    constructor(age: number, name: string){
        this._age = age
        this.name = name
    }
    set age(val: number) {
        this._age = val
    }
    get age() {
        return this._age
    }
}

const UUU = new User6(111, 'ss')