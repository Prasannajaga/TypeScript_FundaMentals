// union types

type family = grandparents & parents & childrens;



// this is how the optional field all works 
// here we used the keyof operator 

type partial<T> = {
    [k in keyof T] ?: T[k]
}


type grandparents = {
    grandMother : string ,
    grandFather : string 
}

type parents = {
    father : string ,
    mother : string 
}

type childrens = {
    son : Array<string>,
    daughter : Array<string>
}


let data : partial<family> = {
    grandFather : "kumar",
}