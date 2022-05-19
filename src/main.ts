const a = 1

let b = "Hello World" //it also takes up the type automatically

let c: boolean = false  //type set to boolean


//functions with variable declarations w. return type (normal)

function abc(num:number,name:string):string{
    console.log(num+" : "+name)
    return "hello world"
}

//same with arrow function

let abcd = (num:number,name:string):number =>{
    console.log(num+" : "+name)
    return 10
}

//object creation with type

var obj1:{name:string,age:number} = {
    name:"rupak",
    age:20
}

//if we need to put same object types on multiple objects we may write an interface

interface Objtype{
    name:string,age:number,sem?:number //putting ? means optional
}

interface Objtype2{  
    func1():string | number  //type to put functions (same function should be created with same return type)
}

//now we replace

let obj2:Objtype = {
    name:"rupak",
    age:20,
    sem:4
}  //result is same

//unions

let univar:string | number | null = null // | means this d_type or that

let univar2:Objtype | string //this means if we put object then we need to follow interface

//type aliases

type ID = string | number // store type on a type variable (union is also available)

let alieg1: ID = "rupak123"

//other types any,unknown,never

let dontuseit:any = 123


let dontuseit2:unknown = "abc"
dontuseit = dontuseit2
// let strdemo:string = dontuseit2 (this will throw error, unknown type variable can't be initialized on other types)
let strdemo:string = dontuseit2 as string // this works;; example of type assertion(like typecasting)

let func2 = ():void=>{
    console.log("ok")
}
//void type should be used as a return type if there is nothing to return

//## DOM Manipulations ***must use type assertion

const someElement = document.querySelector('.foo') as HTMLInputElement
//this should be done to aceess dom element is ts (donot convert it to any!!)
//all elements are there, just convert and use it
console.log(someElement.value)

const someElement2 = document.addEventListener('event',(event)=>{
    let target = event.target as HTMLInputElement //target also donot work itself
    console.log(target.value)
})


//classes with ts (OOP Concept also present)

interface useInClass{
    func1():string
}

// if we implement interface inside class, we must use the function inside
//use access specifier inside the class i.e on the elements, not directly on the class

class extendIt{
    printf(){
        console.log("hello world")
    }
}

class getname extends extendIt implements useInClass{
    protected firstname:string
    lastname:string
    readonly address:string //immutable data member

    constructor(fstname:string,lstname:string){
        super()
        this.firstname = fstname
        this.lastname = lstname
        this.address = "mgm" //readonly access specifier can only be initialized here and is then immutable
    }

    display = ():string=>{
        return (this.firstname + " " + this.lastname)
    }

    func1():string{
        return "abc"
    }
}

let prntname = new getname("Rupak","Biswas")
console.log(prntname.printf)

//generics (like template in cpp)

//putting this changes the type as given during call
//multiple of these generics can be given

let genEg1 = <T> (eg:T)=>{
    console.log(eg)
}

genEg1(123)
genEg1<string>("Rupak") //manual declaration



//doing extends make a default type (actually this is not needed; do normal declaration)
let genEg2 = <T extends number> (eg:T)=>{
    console.log(eg)
}

genEg2(1234)

//Enums (not that useful; just use objects)

enum Status{
    a,b,c = "rupak"
}

console.log(Status.a) // a = 0, b = 1, c = rupak

let enumeg: Status = Status.a //can be used as a datatype also





