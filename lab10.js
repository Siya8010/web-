// Sort patients by age in descending order
function sortPatients() {
    let table = document.getElementById("patientTable");
    let rows = Array.from(table.rows);
    rows.sort((a, b) => b.cells[2].innerText - a.cells[2].innerText);
    
    table.innerHTML = "";
    rows.forEach(row => table.appendChild(row));
}

// Check if P-Id exists
function checkPatient() {
    let searchId = document.getElementById("searchId").value;
    let table = document.getElementById("patientTable").rows;
    
    for (let row of table) {
        if (row.cells[0].innerText === searchId) {
            alert("P-Id Found: " + row.cells[1].innerText);
            return;
        }
    }
    alert("P-Id Not Found");
}

// Filter patients by age range
function filterPatients() {
    let minAge = document.getElementById("minAge").value;
    let maxAge = document.getElementById("maxAge").value;
    let table = document.getElementById("patientTable").rows;
    
    for (let row of table) {
        let age = row.cells[2].innerText;
        row.style.display = (age >= minAge && age <= maxAge) ? "" : "none";
    }
}

// Update h1 title using getElementById
function updateTitle() {
    document.getElementById("header").innerText = "Updated Title";
}

// Update input field using getElementsByName
function updateUsername() {
    document.getElementsByName("username")[0].value = "John Doe";
}

// Get selected radio button using getElementsByName
function getSelectedGender() {
    let radios = document.getElementsByName("gender");
    for (let radio of radios) {
        if (radio.checked) {
            document.getElementById("genderOutput").innerText = "Selected Gender: " + radio.value;
        }
    }
}

// Count and print <p> elements using getElementsByTagName
function countParagraphs() {
    let paragraphs = document.getElementsByTagName("p");
    console.log("Total <p> elements: " + paragraphs.length);
}

// Change background color using getElementsByClassName
function changeInputColor() {
    let inputs = document.getElementsByClassName("input-field");
    for (let input of inputs) {
        input.style.backgroundColor = "lightblue";
    }
}

// Update first <p> element with class "info" using querySelector
function updateFirstInfo() {
    let firstInfo = document.querySelector(".info");
    if (firstInfo) firstInfo.innerText = "This is the first info paragraph";
}

// Update all <p> elements with class "info" using querySelectorAll
function updateAllInfo() {
    let paragraphs = document.querySelectorAll(".info");
    paragraphs.forEach(p => console.log(p.innerText));
}

function submitOrder() {
    let customerName = document.getElementById("customerName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let selectedProducts = [];
    let productCheckboxes = document.querySelectorAll(".product-check");

    productCheckboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            let quantity = document.querySelectorAll(".product-quantity")[index].value;
            if (quantity > 0) {
                let product = {
                    name: checkbox.value,
                    price: checkbox.getAttribute("data-price"),
                    quantity: quantity
                };
                selectedProducts.push(product);
            }
        }
    });

    if (selectedProducts.length === 0) {
        alert("Please select at least one product.");
        return;
    }

    let orderDetails = {
        customerName: customerName,
        phone: phone,
        email: email,
        products: selectedProducts
    };

    localStorage.setItem("orderReceipt", JSON.stringify(orderDetails));
    window.location.href = "receipt.html";
}