function calculateBMI() {
    let weight = parseInt(prompt("Enter your weight in kg:"));
    let height = parseInt(prompt("Enter your height in cm:")) / 100; // Convert cm to meters

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        bmi = bmi.toFixed(2);
        
        let category = getBMICategory(bmi);
        
        alert(`Your BMI: ${bmi}\nCategory: ${category}`);
    } else {
        alert("Please enter valid numbers for weight and height.");
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
        return "Obesity";
    } else {
        return "Severe Obesity";
    }
}
