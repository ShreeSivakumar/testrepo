let count = 0;

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue(){
    if(count === 10){
        alert("You gained 10 followers")
    }
    else if(count === 20){
        alert("You gained 20 followers")
    }
}

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function resetCount(){
    count = 0;
    displayCount();
    alert("Your followers count has benn reset")
}