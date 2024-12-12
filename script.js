
const userLogin = () => {
    const username = prompt("Enter your username:");
    let attempts = 5;
    let isAuthenticated = false;

    while (attempts > 0) {
        const password = prompt("Enter your password:");
        if (password === "123") {
            isAuthenticated = true;
            break;
        }
        attempts--;
        alert(`Incorrect password. You have ${attempts} attempt(s) left.`);
    }

    if (isAuthenticated) {
        alert(`Welcome, ${username}!`);
    } else {
        alert("Please try again later.");
    }
};

userLogin();
