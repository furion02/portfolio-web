// Array of inspirational quotes
const quotes = [
  "The best way to predict the future is to invent it. – Alan Kay",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Optimism is an occupational hazard of programming. – Kent Beck",
  "In order to be irreplaceable, one must always be different. – Coco Chanel",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Failure is not the opposite of success; it’s part of success. – Arianna Huffington"
];

let quoteIndex = 0;
let quoteInterval;
let iframe;

// Function to display the next quote
function showNextQuote() {
  const quoteElement = document.getElementById('quote-text');
  quoteElement.textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length; // Loop through quotes
}

// Function to start rotating quotes
function rotateQuotes() {
  // Display the first quote immediately
  showNextQuote();
  
  // Change the quote every 4 seconds
  quoteInterval = setInterval(showNextQuote, 4000); // 4-second interval
}

// Preload the main.html page
function preloadIndexPage() {
  iframe = document.createElement('iframe');
  iframe.src = 'main.html'; // Preload main.html
  iframe.style.display = 'none'; // Hide the iframe
  document.body.appendChild(iframe); // Append to the body (preload)

  // Event listener for iframe load
  iframe.onload = handlePageReady;

  // Check if iframe has already loaded (race condition prevention)
  if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
    handlePageReady(); // Call handler directly if already loaded
  }
}

// Function to handle the page load completion
function handlePageReady() {
  const preloader = document.getElementById('preloader');

  // Stop rotating quotes
  clearInterval(quoteInterval);

  // Wait for the loading bar to complete (7 seconds)
  setTimeout(() => {
    // Fade out the preloader
    preloader.style.opacity = '0';

    // After 1 second of fading out, remove the preloader and redirect
    setTimeout(() => {
      preloader.style.display = 'none';
      window.location.href = 'main.html'; // Redirect to main.html
    }, 1000); // 1-second fade-out duration

  }, 7000); // 7-second delay to match the loading bar duration
}

// Start rotating quotes and preload main.html
rotateQuotes();
preloadIndexPage();
