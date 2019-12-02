    document.getElementById("food").setAttribute("value", Math.random() * (100 - 50) + 50);
    document.getElementById("clean").setAttribute("value", Math.random() * (100 - 50) + 50);
    document.getElementById("happiness").setAttribute("value", Math.random() * (100 - 50) + 50);

    btn_food.onclick = function() {
        document.getElementById("food").setAttribute("value",  food.value  + 30);
        document.getElementById("clean").setAttribute("value",  clean.value  - 20);
        if (food.value >= 100) {
            return alert("Сat ate enough. but dirty");
        } else if (clean.value <= 0) {
            return alert("gg");
        }
    }

    btn_clean.onclick = function() {
        document.getElementById("clean").setAttribute("value",  clean.value  + 40);
        document.getElementById("happiness").setAttribute("value",  happiness.value  - 20);
        if (clean.value >= 100) {
            return alert("Сat very clean, but not very happy");
        } 
    }

    btn_happiness.onclick = function () {
        document.getElementById("happiness").setAttribute("value", happiness.value  + 15);
        document.getElementById("food").setAttribute("value", food.value  - 10);
        if (happiness.value >= 100) {
            return alert("Сat very happiness, but perhaps hungry");
        }

    }

    let foodId = setInterval(() => document.getElementById("food").setAttribute("value", food.value * 1 -5), 5000);
    let cleanId = setInterval(() => document.getElementById("clean").setAttribute("value", clean.value * 1 -5), 5000);
    let happinessId = setInterval(() => document.getElementById("happiness").setAttribute("value", happiness.value * 1 -5), 5000);