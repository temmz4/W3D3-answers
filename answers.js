////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i <= 20; i++)
// console.log([i])

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        // console.log([i])
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        // console.log("Fizz")
    } else if (i % 5 === 0) {
        // console.log("Buzz")
    } else (i % 3 === 0 && i % 5 === 0) 
        // console.log("FizzBuzz")
    
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]=("5001")
// console.log(plantee)
wolfy[3]=("Gotham City")
// console.log(wolfy)
dart.push("Hawkins")
// console.log(dart)
wolfy[0]=('Gameboy')
// console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const turtle = []
turtle[0] = ('Donatello')
turtle[1] = ("Leonardo")
turtle[2] = ('Raphael')
turtle[3] = ("Michaelangelo")

for (const n of turtle) {
    // console.log(n.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle',
'Django Unchained', 'Cloud Atlas', 'The Usual Suspects',
'Toy Story', 'Conan the Barbarian', 'Titanic',
'Harry Potter', 'Fried Green Tomatoes', 'Volver',
'Oculus', 'Seven', 'Black Panther',
'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])
// console.log(favMovies.sort())
favMovies.pop()
// console.log(favMovies)
favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)
const reversed = favMovies.reverse()
console.log(reversed)
favMovies.shift()
// console.log(favMovies)
favMovies.unshift() 
// console.log(favMovies)
favMovies.splice(13, 14, "Avatar")
// console.log(favMovies)
// console.log(favMovies.slice(0, 9))
let middle = (favMovies.slice(0, 9))
// console.log(middle)
// console.log(favMovies[15]) // comes back undefined when integer is removed from array

////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const catSpeak = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
let purr = 0;

catSpeak[purr]
// catSpeak[0] = ("...human...why you taking pictures of me?...")
// catSpeak[1] = ("...the catnip made me do it...")
// catSpeak[2] = ("...why does the red dot always get away...")
for (let i = 0; i <= 20; i++) {
console.log([i], "Love me, pet me! HSSSSSS!")
} if (i % 2 === 0) {
    console.log()
}
////////////////////////////////
//  Find the Median
////////////////////////////////