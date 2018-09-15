// I. Variable & Datatypes
    // A. Q + A
        // How do we assign a value to a variable?
            // const variable = value;
        // How do we change the value of a variable?
            // varible = newValue;
        // How do we assign an existing variable to a new variable?
            // newVariable = existingVariable;
        // Remind me, what are declare, assign, and define?
            // declare is when you establish a new variable
            // assign is when you give that variable a value
            // define is when you re-assign a value
        // What is pseudocoding and why should you do it?
            // it's writing out what you want your code to do in plain english to clarify what you'll actually work on
        // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
            // roughly 75% of time planning, 25% of time typing

    // B. Strings

        // 1.  
            let firstVariable = "Hello World";
            firstVariable = 36;
            let secondVariable = firstVariable;
            secondVariable = "Any string lmao";
            // firstVariable should be 36

        // 2.
            const yourName = "Deeter";
            console.log(`Hello, my name is ${yourName}.`);
    // C.
        // 1. Booleans
            const a = 4;
            const b = 53;
            const c = 57;
            const d = 16;
            const e = 'Kevin';

            console.log(a < b);
            console.log(c > d);
            console.log('Name' === 'Name');
            console.log(true !== false);
            console.log(false !== false !== false !== false !== false !== false !== true);
            console.log(false === false)
            console.log(e === 'Kevin');
            console.log(a < b < c);
            console.log(a < a < d);
            console.log(48 == '48');
    // D. 
        const animal = "cow";
        const moo = (input) => {
            if(input === animal){
                console.log("mooooo")
            }
            else {
                console.log("Hey! You're not a cow.")
            }
        }
    // E. Driver's Ed
        const age = 16;
        if (age >= 16){
            console.log("Here are the keys")
        }
        else {
            console.log("Sorry, you're too young.")
        }
// II.
    // A.
        // 1.  
            for(let i=0; i<=10; i++){
                console.log(i)
            };
        // 2.
            for(let i=10; i<=400; i++){
                console.log(i)
            };
        // 3,
            for(let i=12; i<=4000; i+=3){
                console.log(i)
            };
    // B. Get Even
            for(let i=1 ; i<=100; i++){
                if(i%2===0){
                    console.log(`${i} <-- is an even number`)
                }
            }
    // C. Give me Five
            for(let i=0; i<=100; i++){
                if(i%5===0){
                    console.log(`I found a ${i}. High five!`)
                }
                if(i%3===0){
                    console.log(`I found a ${i}. Three is a crowd`)
                }
            }
    // D. Savings account
            // 1.
                let sum = 0;
                for(let i=1; i<=10; i++){
                    sum += i;
                }
                console.log(sum);
            // 2. 
                sum = 0;
                for(let i=1; i<=100; i++){
                    sum += (i*2);
                }
                console.log(sum);
    // E. Multiples of 3 and 5
            // I've already done this problem
// III. Arrays & Control Flow
    // A. Talk About it
        // The things in an array are index values
        // No, no guarantee an array will be ordered
        // a real-life thing could be a product listing, a set of buttons or input fields
    // B. Easy Does It
        const quotes = ["Four score and seven year", "Ask not what your country can do for you","Build a wall"];
    // C. Accessing Elements
        const randomThings = [1, 10, "Hello", true];
        randomThings[0];
        randomThings[2] = "World";
        console.log(randomThings);
    // D. Change Values
        const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
        ourClass[2];
        ourClass[4] = "Octocat";
        ourClass.push("Cloud City");
    // E. Mix it up
        const myArray = [5, 10, 500, 20];
        myArray.push("Egon");
        myArray.push("Another");
        myArray.shift();
        myArray.unshift("Bob Marley");
        myArray.pop();
        myArray.reverse();
        // Yes, we mutated it. It affected the values of the array. It returns the reversed array.
    // F. Biggie Smalls
        const int = 5;
        if (int >= 100) {
            console.log("big number")
        }
        else {
            console.log("little number")
        };
    // G. 
        if(int < 5){
            console.log("little number")
        }
        if(int > 10){
            console.log("big number")
        }
        else {
            console.log("monkey")
        };
    // H. 
        const kristynsCloset = [
            "left shoe",
            "cowboy boots",
            "right sock",
            "GA hoodie",
            "green pants",
            "yellow knit hat",
            "marshmallow peeps"
        ];
      
        // Thom's closet is more complicated. Check out this nested data structure!!
        const thomsCloset = [
            [
            // These are Thom's shirts
            "grey button-up",
            "dark grey button-up",
            "light blue button-up",
            "blue button-up",
            ],[
            // These are Thom's pants
            "grey jeans",
            "jeans",
            "PJs"
            ],[
            // Thom's accessories
            "wool mittens",
            "wool scarf",
            "raybans"
            ]
        ];

        console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
        kristynsCloset.splice(6,0, "raybans");
        console.log(kristynsCloset);
        kristynsCloset[5] = "stained knit hat";
        thomsCloset[0][0];
        thomsCloset[1][1];
        thomsCloset[2][2];
        console.log(`Thom finna slay with his ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and his ${thomsCloset[2][2]}.`);
        thomsCloset[1][2] = "Footie Pajamas";
// IV.
    // A. printGreeting
        const printGreeting = (name) => {
            return `Hey there, ${name}!`;
        };
    // B. printCool
        const printCool = (name) => {
            console.log(`${name} is cool.`)
        };
        // Isn't this the same as the last problem? I think the order might've been mixed.
    // C. calculateCube
        const calculateCube = (num) => {
            console.log(num*num*num);
        };
    // D. isVowel
        const isVowel = (char) => {
            const newChar = char.toLowerCase();
            if(newChar === "a" || newChar === "e" || newChar === "i" || newChar === "o" || newChar === "u" || newChar === "y"){
                return true
            }
            else return false;
        };
        