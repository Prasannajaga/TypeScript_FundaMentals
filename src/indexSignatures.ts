


type DayOfTheWeek = "sunday" | "monday" | "tuesday" | "wednesday" | 
                    "thursday" | "friday" | "saturday";

// Index Signatures 
// type Days = { [DAY in DayOfTheWeek]: string };

//  using Record<key , value>
type Days = Record<DayOfTheWeek,string>;

const data  : Days = {  
    sunday: "do the dishes",
    monday: "walk the dog",
    tuesday: "water the plants",
    wednesday: "take out the trash",
    thursday: "clean your room",
    friday: "mow the lawn",
    saturday : "Party vibes"
};


console.log(data.friday)


