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
        // B.
                for(let i=1 ; i<=100; i++){
                    if(i%2===0){
                        console.log(`${i} <-- is an even number`)
                    }
                }