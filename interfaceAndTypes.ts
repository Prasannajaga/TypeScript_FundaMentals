interface globalObject{
    name : string ,
    age : number ,
    address : string,
    date : string | Date,
    citizen :  string,
}
 
interface global<T = string>{
    [some : string] : "hello-world"
}

// since our types have only assignable to hello-world ?
// we'll get error when we try to assign different value
let data : global = {
    // somes : "prasanna",  // throws error
    some : "hello-world"
}

type window<T> = {
    [K in keyof T extends `${infer U}` ? U : never] : string 
}

let response : window<globalObject> = {
    name: "",
    age: "",
    address: "",
    date: "o",
    citizen: ""
}



 