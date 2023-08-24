

export type GameModel =  { 
    title: string,   
    genre: string,
    platform: string,
    publisher: string, 
    release_date: string, 
  }
 

  // Record<Keys,Types>

  const record : Record<string, GameModel> = {
        GTAV : {
            title : "GTAV",
            genre : "Action & Adventure",
            platform : "PC",
            release_date : '2013',
            publisher : "Unreal"
        }
  }


  // Pick<Types,Keys>
 
  const pick : Pick<GameModel , "title" | "publisher"> = {
    publisher : 'RockStar' , title : "GTAV"
  }
  

  // Omit<Types,Keys>

  const omit : Omit<GameModel , "release_date" | "platform" | "publisher"> = {
     genre : "Action and Adventure" , title : "GTAV"
  }


  // Exclude<unionTypes,Keyswantedremove>
 
  type myUnionType = "🍇" | "🍎" | "🫐" | "🍋"

  const noLemonPlease : Exclude<myUnionType, "🍋" | ""> = "🍇";


  // Extract<unionTypes,KeysYouWanted>

  const tomatoMango : Extract<myUnionType, "🍋" |  "🍎"> = "🍋" || "🍎";
 

  // Parameters<Function>

  function getData(data1:string,data2:string,age:number,game:GameModel){}

  const parameters : Parameters<typeof getData> = 
  ["Prasanna" , "Jagadesh" , 21 , record['GTAV']]; 

  // ConstructorParameters<Class>
  
  class Person {
    constructor(game : GameModel) {}
  }

  const contructorParameters : ConstructorParameters<typeof Person> = [record["GTAV"]];

  console.log(contructorParameters);
  

  //ReturnType<function>

  function returnThis() : string {
    return "";
  } 

  const returnTypes : ReturnType<typeof returnThis> = "Return type string is accepted";