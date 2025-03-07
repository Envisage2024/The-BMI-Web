function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        alert('Please enter valid height and weight.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    const result = document.getElementById('bmi-result');
    result.innerHTML = `<br> Your BMI: <strong>${bmi}</strong>`;
    result.classList.add('fade-in');

    const advice = document.getElementById('bmi-advice');
    const adviceButton = document.getElementById('advice-button');

    let message = '';
    let adviceLink = '';

    if (bmi < 18.5) {
        message = 'You are underweight. <br> Click below for nutrition and muscle-building advice.';
        adviceLink = 'under.html';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Your BMI is normal. <br> Click below for tips on maintaining a healthy lifestyle!';
        adviceLink = 'normal.html';
    } else {
        message = 'You are overweight. <br> Click below for expert guidance on achieving a healthy weight.';
        adviceLink = 'over.html';
    }

    advice.innerHTML = message;
    advice.classList.add('fade-in');

    // Ensure the button is shown and linked correctly
    adviceButton.href = adviceLink;
    adviceButton.style.display = 'block'; // Ensure it's visible
}
