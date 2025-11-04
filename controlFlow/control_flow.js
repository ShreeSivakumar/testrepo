let userRole = "employee";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Example: Dietary Services Authorization

// Check role and provide access message
if (userRole === "employee") {
    console.log("You are authorized to access the full Dietary Services program.");
} else if (userRole === "enrolled member") {
    console.log("You are authorized to access Dietary Services and one-on-one interaction with a dietician.");
} else if (userRole === "subscriber") {
    console.log("You have partial access to Dietary Services.");
} else if (userRole === "non-subscriber") {
    console.log("Please enroll or subscribe first to avail Dietary Services.");
} else {
    console.log("Invalid role entered. Please enter a valid role.");
}
