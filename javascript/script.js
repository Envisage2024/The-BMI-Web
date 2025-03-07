function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        alert('Please enter valid height and weight.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    const result = document.getElementById('bmi-result');
    result.innerHTML = `Your BMI: <strong>${bmi}</strong>`;
    result.classList.add('fade-in');

    const advice = document.getElementById('bmi-advice');
    const adviceButton = document.getElementById('advice-button');

    let message = '';
    let adviceLink = '';

    if (bmi < 18.5) {
        message = 'You are underweight. Click below for nutrition and muscle-building advice.';
        adviceLink = 'under.html';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Your BMI is normal. Click below for tips on maintaining a healthy lifestyle!';
        adviceLink = 'normal.html';
    } else {
        message = 'You are overweight. Click below for expert guidance on achieving a healthy weight.';
        adviceLink = 'over.html';
    }

    advice.innerHTML = message;
    advice.classList.add('fade-in');

    // Ensure the button is shown and linked correctly
    adviceButton.href = adviceLink;
    adviceButton.style.display = 'block'; // Ensure it's visible
}

// Toggle navigation menu
document.getElementById('toggle-nav').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Daily health tips function
function updateHealthTip() {
    const tips = [
        "Drink plenty of water every day.",
        "Exercise for at least 30 minutes daily.",
        "Eat a balanced diet with lots of fruits and vegetables.",
        "Get enough sleep for better health.",
        "Limit sugar intake to maintain energy levels."
    ];
    const today = new Date().getDay();
    document.getElementById('daily-tip').innerText = tips[today % tips.length];
}

// Run the daily tip function when the page loads
window.onload = updateHealthTip;
