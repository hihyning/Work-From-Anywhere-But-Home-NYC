function submitName() {
    var name = document.getElementById('nameInput').value;
    document.getElementById('submissionBox').innerHTML = "<p>CUSTOMER: " + name + "</p>";
    document.getElementById('visitCount').style.marginTop = "0";
  }
// Function to update the date and time
function updateDateTime() {
  // Get current date and time
  var currentDate = new Date();
  
  // Format the date and time
  var dateTimeString = currentDate.toLocaleString();

  // Display the formatted date and time in the 'datetime' element
  document.getElementById('datetime').textContent = dateTimeString ;
}

// Call the function initially to display the current date and time
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
// Check if the count is stored in localStorage
if (localStorage.getItem('visitCount')) {
  // If count exists, get it from localStorage and display it
  var count = parseInt(localStorage.getItem('visitCount'));
  document.getElementById('count').innerText = count;
} else {
  // If count doesn't exist, initialize it to 1 and display it
  var count = 1;
  document.getElementById('count').innerText = count;
}

// Increment the count and update the display
count++;
document.getElementById('count').innerText = count;

// Store the updated count in localStorage
localStorage.setItem('visitCount', count);
// Function to show the popup
function showPopup(id) {
  let numberOfPopups = 15;
  for (let i = 1; i <= numberOfPopups; i ++){
    var currentPopup = document.getElementById("popup" + i);
    console.log("popup" + i);
    currentPopup.style.display = "none"; // Hide the popup
  }
  var popup = document.getElementById(id);
  popup.style.display = "block"; // Show the popup
}
// Function to hide the popup
function hidePopup(id) {
  var popup = document.getElementById(id);
  popup.style.display = "none"; // Hide the popup
}

function addToOrder(itemName) {
  var orderList = document.getElementById('orderItems');
  var listItem = document.createElement('li');

  if (orderList.children.length >= 3) {
    orderList.removeChild(orderList.children[0]);
  }

  var p = document.createElement('p');
  p.textContent = itemName;
  listItem.appendChild(p);
  orderList.appendChild(listItem);
}

function handlePopupOnclick(id, itemName){
  showPopup(id);
  addToOrder(itemName);
}
// Get the HTML elements
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const numberText = document.getElementById('number');

// Add event listeners for buttons
decrementBtn.addEventListener('click', () => {
  // Parse the current number text to an integer and decrement by 1
  let currentValue = parseInt(numberText.textContent);
  if (currentValue > 0) {
    numberText.textContent = currentValue - 1;
  }
});

incrementBtn.addEventListener('click', () => {
  // Parse the current number text to an integer and increment by 1
  let currentValue = parseInt(numberText.textContent);
  numberText.textContent = currentValue + 1;
});

