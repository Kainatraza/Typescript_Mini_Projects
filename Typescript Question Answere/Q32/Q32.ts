// Q32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



const currentUsers: string[] = ['john', 'mary', 'alice', 'bob', 'emma'];

// Make another list of new users
const newUsers: string[] = ['Alice', 'Bob', 'johnny', 'dave', 'susan'];

// Loop through new users
for (const newUser of newUsers) {
    // Check if the username already exists (case-insensitive)
    if (currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available!`);
    }
}
