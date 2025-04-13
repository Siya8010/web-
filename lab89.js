function calculate() {
    // Get user input
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter numeric values.");
        return;
    }

    // Get operation choice
    let operation = prompt("Choose an operation: +, -, *, /, %");

    // Perform the operation
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            alert(`Result: ${num1} + ${num2} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            alert(`Result: ${num1} - ${num2} = ${result}`);
            break;
        case "*":
            result = num1 * num2;
            alert(`Result: ${num1} × ${num2} = ${result}`);
            break;
        case "/":
            if (num2 === 0) {
                alert("Error! Division by zero is not allowed.");
            } else {
                result = num1 / num2;
                alert(`Result: ${num1} ÷ ${num2} = ${result}`);
            }
            break;
        case "%":
            result = num1 % num2;
            alert(`Result: ${num1} % ${num2} = ${result}`);
            break;
        default:
            alert("Invalid operation! Please enter one of +, -, *, /, %.");
    }
}
function checkDrivingEligibility() {
    // Get user input
    let age = parseInt(prompt("Enter your age:"));

    // Check if input is valid
    if (isNaN(age) || age <= 0) {
        alert("Invalid input! Please enter a valid age.");
        return;
    }

    // Check eligibility
    if (age >= 18) {
        alert("You are eligible to drive! 🚗✅");
    } else {
        alert("You are not eligible to drive yet. 🚫 Wait until you turn 18.");
    }
}
function confirmStudent() {
    // Ask for confirmation
    let isStudent = confirm("Are you a student? Click OK for Yes, Cancel for No.");

    if (isStudent) {
        // Prompt for registration number
        let regNumber = prompt("Enter your registration number:");

        // Validate registration number input
        if (regNumber && regNumber.trim() !== "") {
            alert("Registration successful! Your registration number is: " + regNumber);
        } else {
            alert("Registration number cannot be empty!");
        }
    } else {
        alert("You must be a student to register.");
    }
}
function calculateCost() {
    const ratePerHour = 45; // Given rate per hour

    // Ask the user for hours worked
    let hoursWorked = prompt("Enter the number of hours worked:");

    // Convert input to a number
    hoursWorked = parseFloat(hoursWorked);

    // Validate hours worked
    if (isNaN(hoursWorked) || hoursWorked <= 0) {
        alert("Please enter a valid number of hours.");
        return;
    }

    // Ask the user for the cost of materials
    let costOfMaterials = prompt("Enter the cost of materials:");

    // Convert input to a number
    costOfMaterials = parseFloat(costOfMaterials);

    // Validate cost of materials
    if (isNaN(costOfMaterials) || costOfMaterials < 0) {
        alert("Please enter a valid cost of materials.");
        return;
    }

    // Calculate Labour Cost
    let labourCost = ratePerHour * hoursWorked;

    // Calculate Total Charge
    let totalCharge = labourCost + costOfMaterials;

    // Display the result
    alert(
        `Labour Cost: Rs.${labourCost.toFixed(2)}\n` +
        `Total Charge: Rs.${totalCharge.toFixed(2)}`
    );
}
// Accept registration number and name using prompt
let regNo = prompt("Enter your Registration Number:");
let name = prompt("Enter your Name:");

// Display the registration number using document.write with inline styling
document.getElementById("regNo").innerHTML = `<span style="border: 2px solid red; padding: 5px;">${regNo}</span>`;

// Display the name using innerHTML with inline styling
document.getElementById("name").innerHTML = `<span style="border: 1px solid black; padding: 5px; color: red;">${name}</span>`;

function calculateTotal() {
    // Get the number of tickets
    let adultTickets = document.getElementById("adult").value;
    let childTickets = document.getElementById("child").value;

    // Convert input values to numbers
    adultTickets = parseInt(adultTickets) || 0;
    childTickets = parseInt(childTickets) || 0;

    // Calculate total price
    let totalAmount = (adultTickets * 10) + (childTickets * 5);

    // Display total amount
    document.getElementById("total").value = totalAmount;
}

function analyzeTemperatures() {
    const temperatures = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87, 80, 78, 79, 72, 68, 61, 59, 55, 65];

    let hotDays = 0;
    let pleasantDays = 0;
    let coldDays = 0;

    let tableBody = document.getElementById("temperature-table");
    tableBody.innerHTML = ""; // Clear existing data

    temperatures.forEach((temp, index) => {
        let category;
        let className;

        if (temp >= 85) {
            category = "Hot";
            className = "hot";
            hotDays++;
        } else if (temp >= 60) {
            category = "Pleasant";
            className = "pleasant";
            pleasantDays++;
        } else {
            category = "Cold";
            className = "cold";
            coldDays++;
        }

        // Create a new row in the table
        let row = `<tr class="${className}">
                    <td>Day ${index + 1}</td>
                    <td>${temp}°F</td>
                    <td>${category}</td>
                   </tr>`;

        tableBody.innerHTML += row;
    });

    // Update summary
    document.getElementById("hot-days").innerText = hotDays;
    document.getElementById("pleasant-days").innerText = pleasantDays;
    document.getElementById("cold-days").innerText = coldDays;
}
// Seating array (0 = Available, 1 = Occupied)
let seats = new Array(10).fill(0);

// Function to display seating chart
function displaySeats() {
    let seatingChart = document.getElementById("seating-chart");
    seatingChart.innerHTML = "";

    seats.forEach((seat, index) => {
        let seatDiv = document.createElement("div");
        seatDiv.classList.add("seat");
        seatDiv.textContent = index + 1;

        if (seat === 0) {
            seatDiv.classList.add("available");
        } else {
            seatDiv.classList.add("occupied");
        }

        seatingChart.appendChild(seatDiv);
    });
}

// Function to assign a seat
function assignSeat(section) {
    let name = prompt("Enter your name:");
    if (!name) {
        alert("Please enter a valid name.");
        return;
    }

    let start = section === 1 ? 0 : 5;
    let end = section === 1 ? 5 : 10;

    // Find next available seat
    let seatNumber = -1;
    for (let i = start; i < end; i++) {
        if (seats[i] === 0) {
            seatNumber = i;
            seats[i] = 1; // Mark seat as occupied
            break;
        }
    }

    // Handle full section
    if (seatNumber === -1) {
        let otherSection = section === 1 ? "economy" : "first-class";
        let switchSeats = confirm(`This section is full. Would you like to be placed in ${otherSection}?`);

        if (switchSeats) {
            assignSeat(section === 1 ? 2 : 1);
        } else {
            alert("Next flight leaves in 3 hours.");
        }
        return;
    }

    // Display boarding pass
    document.getElementById("passenger-name").innerText = name;
    document.getElementById("seat-number").innerText = seatNumber + 1;
    document.getElementById("seat-class").innerText = section === 1 ? "First Class" : "Economy";
    document.getElementById("boarding-pass").style.display = "block";

    displaySeats();
}

// Initialize seating chart
displaySeats();


function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // Convert input values to numbers
    weight = parseFloat(weight);
    height = parseFloat(height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive values for weight and height.");
        return;
    }

    // Calculate BMI using the formula BMI = (703 * weight) / (height * height)
    let bmi = (703 * weight) / (height * height);
    bmi = bmi.toFixed(2);

    // Determine BMI category
    let category = "";

    if (bmi < 17.5) {
        category = "Anorexia (Very Underweight)";
    } else if (bmi >= 17.5 && bmi < 19.1) {
        category = "Underweight";
    } else if (bmi >= 19.1 && bmi < 25.8) {
        category = "Ideal Range";
    } else if (bmi >= 25.8 && bmi < 27.3) {
        category = "Marginally Overweight";
    } else if (bmi >= 27.3 && bmi < 32.3) {
        category = "Overweight";
    } else {
        category = "Very Overweight or Obese";
    }

    // Display the calculated BMI
    document.getElementById("bmiResult").value = bmi;

    // Show BMI status in a popup alert
    alert(`Your BMI is ${bmi}. Status: ${category}`);
}