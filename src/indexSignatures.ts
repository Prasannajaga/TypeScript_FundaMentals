

type DayOfTheWeek = "sunday" | "monday" | "tuesday" | "wednesday" | 
                    "thursday" | "friday" | "saturday";

// Index Signatures  
type Days<T> = { 
    [DAY in keyof T]: T[DAY] 
};

//  using Record<key , value>
// type Days = Record<DayOfTheWeek,string>;

let datas : Days<DayOfTheWeek> = "sunday"; 

    // sunday: "do the dishes",
    // monday: "walk the dog",
    // tuesday: "water the plants",
    // wednesday: "take out the trash",
    // thursday: "clean your room",
    // friday: "mow the lawn",
    // saturday : "Party vibes"
// };


// console.log(data.friday)


