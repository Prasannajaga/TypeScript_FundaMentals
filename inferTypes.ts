import { prettify } from "./src/typealias";

type someObject = {
    firstName : string ,
    lastName : string
}

type responseObjectModal = {
    code : number ,
    status : string ,
    data : unknown | {},
    message : string
}

function show(data : "lastName") : string[] {
    // return `Hello it's ${data}`;
    return [""];
}

type someObjectResponse<T = string | boolean | number> = {
    data : T
}

let response : prettify<someObjectResponse<string>>


// Infer in types called as condition types
//  In this types we're using extends (args : infer R) => infer U 
// by using constraints we saying typescript that you can only pass something function 
// you can't pass object to this TS will yell at us.

type remove<T extends responseObjectModal> = {
    [K in keyof T as RemoveKeys<K>] : T[K]
}

let f  : remove<responseObjectModal> = {
    ata : "" , code : 0 , message : "" , status : ""
}; 

type RemoveKeys<T> = T extends `d${infer U}` ? U : T;

type resultFunction<T> = T extends ((args : infer R) => infer U extends string[]) ? 
// (U extends R ? R : never)
(R extends keyof someObject ? someObject : never)
: never;

type resultObject<T extends string = string> = T extends `${infer U}.${infer R}.${infer S}` ?  U extends `come`?
[R , U , S] : never 
: never;  

//  infer functions 
type result1 = resultFunction<typeof show> ;
let  p : result1 = {
    firstName : "" , lastName : ""
};

// infer object literals
type result2 = resultObject<"come.on.here">;

 
