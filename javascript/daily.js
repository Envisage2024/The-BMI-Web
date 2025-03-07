// Function to update the daily health tip dynamically
function updateHealthTip() {
    const tips = [
        {
            text: "Drink plenty of water every day to stay hydrated and improve digestion.",
            image: "images/water.jpg"
        },
        {
            text: "Exercise for at least 30 minutes daily to keep your body active and healthy.",
            image: "images/exercise.jpg"
        },
        {
            text: "Eat a balanced diet rich in fruits and vegetables for essential vitamins and nutrients.",
            image: "images/healthy-food.jpg"
        },
        {
            text: "Get enough sleep every night to boost your immune system and mental health.",
            image: "images/sleep.jpg"
        },
        {
            text: "Limit sugar intake to maintain energy levels and avoid unnecessary weight gain.",
            image: "images/no-sugar.jpg"
        }
    ];

    // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    const today = new Date().getDay();

    // Select the tip and image based on the day
    const dailyTip = tips[today % tips.length];

    // Debugging: Log the selected tip and image
    console.log('Selected Tip:', dailyTip);

    // Update the page content dynamically
    document.getElementById('daily-tip-text').innerText = dailyTip.text;
    document.getElementById('daily-tip-image').src = dailyTip.image;
    document.getElementById('daily-tip-image').alt = "Health Tip Image";
}

// Function to update the health tip randomly
function updateRandomHealthTip() {
    const tips = [
        {
            text: "Drink plenty of water every day to stay hydrated and improve digestion.",
            image: "images/water.jpg"
        },
        {
            text: "Exercise for at least 30 minutes daily to keep your body active and healthy.",
            image: "images/exercise.jpg"
        },
        {
            text: "Eat a balanced diet rich in fruits and vegetables for essential vitamins and nutrients.",
            image: "images/healthy-food.jpg"
        },
        {
            text: "Get enough sleep every night to boost your immune system and mental health.",
            image: "images/sleep.jpg"
        },
        {
            text: "Limit sugar intake to maintain energy levels and avoid unnecessary weight gain.",
            image: "images/no-sugar.jpg"
        }
    ];

    // Select a random tip and image
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    // Debugging: Log the selected tip and image
    console.log('Selected Random Tip:', randomTip);

    // Update the page content dynamically
    document.getElementById('daily-tip-text').innerText = randomTip.text;
    document.getElementById('daily-tip-image').src = randomTip.image;
    document.getElementById('daily-tip-image').alt = "Health Tip Image";
}

// Run the function when the page loads
window.onload = updateHealthTip;

// Add event listener for the new tip button
document.getElementById('new-tip-button').addEventListener('click', updateRandomHealthTip);
