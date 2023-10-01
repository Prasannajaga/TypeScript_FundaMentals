// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'Tamil',
//     'Spanish',
//     'English',
//     'Tamil',
//   ]
//   const languageSet = new Set(languages);
//   console.log(languageSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
//   console.log(languageSet.size) // 4
  
//   const counts : {lang ?:string , count : number }[]= []
  
//   for (const langset of languageSet) {
//     const filteredLang = languages.filter((language : string) => language === langset)
//     console.log(filteredLang) // ["English", "English", "English"]
//     counts.push({ lang: langset, count: filteredLang.length })
//   }
//   console.log(counts)

let data = [
    ["prasanna" , "jagadesh"],
    [ "nirmala" , "krishna"]
];


let d  = new Map<string,any>();
d.set("daata", data);

console.log( )