// Add event listener to the contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('እናመሰግናለን ስለ መልእክትዎ። በቅርቡ እንመልስበታለን!');
});

// Function to show an order form alert
function showOrderForm() {
    alert('የትዕዛዝ ቅጽ በፍጥነት እየተዘጋጀ ነው!');
}
