document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Form submitted successfully');
    });
  });
  // Show modal when image or video is clicked
function showWeatherModal(city) {
  document.getElementById('weatherModal').style.display = 'block';
  
  // Fetch weather data using the OpenWeather API
  fetchWeather(city);
}

// Close modal function
function closeModal() {
  document.getElementById('weatherModal').style.display = 'none';
}

// Fetch weather data for the clicked destination
// Fetch weather data for the clicked destination

