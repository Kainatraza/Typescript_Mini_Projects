//Q44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log("Items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
        console.log("Enjoy your sandwich!");
    }

    console.log("\n----------------\n");
}


orderSandwich('Turkey', 'Lettuce', 'Tomato', 'Mayo');
orderSandwich('Chicken', 'Cheese', 'Mustard');
orderSandwich();