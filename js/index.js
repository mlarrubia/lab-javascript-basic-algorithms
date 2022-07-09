// Iteration 1: Names and Input
//

let hacker1 = "Timmothy Cruz"
console.log("The driver's name is " + hacker1);

let hacker2 = "J Smith";
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
let result = "";
for (let i = 0; i < hacker1.length; i++) {
    let cLetter = hacker1.charAt(i).toUpperCase();


    if (i < hacker1.length - 1) {
        result += cLetter;
    } else {
        result += cLetter;
    }

}

console.log(result);

console.log("--------------------------------");

let result2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    let cLetter = hacker2.charAt(i);
    result2 += cLetter;
}

console.log(result2);

console.log("--------------------------------");

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name?")
}

console.log(hacker1 > hacker2)

console.log("---------------------------------");

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida sed est quis imperdiet. Pellentesque venenatis tortor vel molestie tincidunt. Aliquam ac posuere turpis. Duis ac efficitur quam. Aliquam eu maximus magna. Aenean odio libero, sollicitudin vel orci vitae, porttitor sagittis mi. Donec sagittis arcu ac nunc rutrum mattis. Vivamus et convallis orci, vel pellentesque leo. Sed sollicitudin orci eget neque scelerisque, eu fringilla nisi faucibus. Fusce quis tempus dui.

Quisque ut mi urna. Aliquam a tempor erat. Pellentesque volutpat aliquet ante, quis porttitor massa facilisis in. Morbi tincidunt aliquam tortor, nec sagittis odio tincidunt ac. Donec ac leo sed est aliquet suscipit. Praesent massa mi, rutrum a mi et, faucibus hendrerit sem. Sed commodo fermentum dui eu varius. Ut tempus ligula id pulvinar pharetra. Donec tempor turpis iaculis luctus pretium.

Etiam auctor nibh vulputate turpis ultricies posuere. Sed vel neque ut urna elementum maximus id sit amet felis. Sed vitae aliquam arcu, eget sollicitudin nibh. Donec aliquet lectus sed magna dapibus auctor. Etiam fermentum malesuada dolor et dictum. Pellentesque venenatis sed elit sit amet auctor. Mauris eget volutpat augue. Phasellus sagittis orci arcu, eget posuere ipsum luctus at. Nulla vel congue lorem, ut venenatis justo.`;

let wordArray = lorem.split(" ");
console.log("Word Count: ", wordArray.length);

console.log("---------------------------------");

let count = 0;

wordArray.forEach(a => {
    if (a === "et") {
        console.log(a);
        count++;
    }
})

console.log("The word et appears " + count + " times")

console.log("---------------------------------");

let list = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"

]

list.forEach(a => {
    let x = a.replace(/[.,\/#!$%\^&\*;:?{}=\-_`~()']/g, "").replace(/ /g, '');
    let lower = x.toLowerCase();

    let result = true;

    let count = 0;
    while (count < a.length / 2) {
        let left = lower.charAt(count);
        let right = lower.charAt(lower.length - 1 - count)

        // console.log(left, right)

        if (left !== right) {
            result = false;
            break;
        }
        count++;
    }

    console.log(a, result);
})