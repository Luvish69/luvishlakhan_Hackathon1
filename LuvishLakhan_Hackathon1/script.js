document.getElementById("calculateBmi").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height.");
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    const bmiValue = document.getElementById("bmiValue");
    const bmiCategory = document.getElementById("bmiCategory");
  
    bmiValue.textContent = bmi;
  
    if (bmi < 18.5) {
      bmiCategory.textContent = "Underweight";
      bmiCategory.style.color = "orange";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory.textContent = "Normal weight";
      bmiCategory.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory.textContent = "Overweight";
      bmiCategory.style.color = "orange";
    } else {
      bmiCategory.textContent = "Obese";
      bmiCategory.style.color = "red";
    }
  });
  