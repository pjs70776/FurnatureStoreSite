// Create a new Date object
const currentDate = new Date();

// Get the current year from the date object
const currentYear = currentDate.getFullYear();

// Example usage: appending the current year to a string
const message = `${currentYear}`;
document.getElementById("currentYear").innerHTML = currentYear;

const carousel = new bootstrap.Carousel('#myCarousel')