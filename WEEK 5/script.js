// Part 1: Basics - Variables, Conditionals
document.getElementById("checkNumberBtn").addEventListener("click", () => {
  let userInput = document.getElementById("userNumber").value;
  let result = "1234";

  if (userInput % 2 === 0) {
    result = `${userInput} is even.`;
  } else if (userInput % 2 !== 0) {
    result = `${userInput} is odd.`;
  } else {
    result = "Please enter a valid number.";
  }

  document.getElementById("numberResult").textContent = result;
});

// Part 2: Functions - Reusable Logic
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

function formatString(str) {
  return str.trim().toUpperCase();
}

// Example usage on button click
document.getElementById("calcTotalBtn").addEventListener("click", () => {
  let prices = [100, 250, 50];
  let total = calculateTotal(prices);
  let formatted = formatString("  total amount ");
  document.getElementById("totalResult").textContent =
    `${formatted}: KES ${total}`;
});

// Part 3: Loops - Repetition
document.getElementById("loopBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old items

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
});

// Part 4: DOM Manipulation

// 1. Toggle a class
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// 2. Add new items dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = `New item ${list.children.length + 1}`;
  list.appendChild(newItem);
});

// 3. Respond to a click event by changing text
document.getElementById("toggleText").addEventListener("click", () => {
  document.getElementById("toggleText").textContent = "You clicked me!";
});
