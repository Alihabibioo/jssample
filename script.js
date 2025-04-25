let username = prompt ("please enter your username");
let password =prompt ("please enter your password"); 
    



if (username === "admin") {
    if (password === "123"){
        alert (`welcome  ${username}`);
    } else {
        alert("wrong password or username");
    }
} else {
    alert("wrong password or username");
}