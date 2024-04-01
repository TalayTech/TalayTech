function openTab(tabId) {
    // Hide all sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(tabId).style.display = 'block';
}

function showLoginForm() {
    openTab('employees');
}

function validateEmployeeLogin() {
    var username = document.getElementById('employeeUsername').value;
    var password = document.getElementById('employeePassword').value;

    // Replace this with your server-side authentication logic
    if (username === 'talay' && password === 'talay') {
        window.location.href = 'employees.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
