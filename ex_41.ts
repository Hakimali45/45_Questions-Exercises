/*
 Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */

 let magicianNames = ["Ali", "Murtaza", "M.Jan", "Talib"];

function show_magicians(){
    for(let magicianName of magicianNames){
        console.log(magicianName);
    }
};

show_magicians();        // calling of function
show_magicians();        // 2nd time calling the function