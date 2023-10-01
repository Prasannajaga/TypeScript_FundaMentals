

type DayOfTheWeek = "sunday" | "monday" | "tuesday" | "wednesday" | 
                    "thursday" | "friday" | "saturday";

// Index Signatures  
// type Days<T> = { 
//     [DAY in keyof T]: T[DAY] 
// };

//  using Record<key , value>
type Days = Record<DayOfTheWeek,string | unknown>;

let datas : Partial<Days> = {
    friday : "prasanna",
}; 

    // sunday: "do the dishes",
    // monday: "walk the dog",
    // tuesday: "water the plants",
    // wednesday: "take out the trash",
    // thursday: "clean your room",
    // friday: "mow the lawn",
    // saturday : "Party vibes"
// };


// console.log(data.friday)


