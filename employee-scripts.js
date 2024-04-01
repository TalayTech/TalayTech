document.addEventListener('DOMContentLoaded', function () {
    const employeeNamesList = document.getElementById('employeeNames');
    const employeeDetailsSection = document.getElementById('employeeDetails');
    const employeeNameHeading = document.getElementById('employeeName');
    const employeeImage = document.getElementById('employeeImage');
    const employeeInfoDiv = document.getElementById('employeeInfo');
    const downloadCVLink = document.getElementById('downloadCV');

    let selectedEmployeeId = null;

    // Sample employees
    addEmployee('Zirak', 25, 'Engineer', 2010, 400, 'zirak_cv.pdf', 'zirak.jpg');
    addEmployee('Gala', 30, 'Manager', 2012, 600, 'gala_cv.pdf', 'gala.jpg');
    // Add more employees...

    function addEmployee(name, age, position, employeeSince, salary, cv, image) {
        const employee = {
            id: employeeNamesList.childNodes.length + 1,
            name: name,
            age: age,
            position: position,
            employeeSince: employeeSince,
            salary: salary,
            cv: cv,
            image: image,
        };

        const listItem = document.createElement('li');
        listItem.innerHTML = `<img src="images/${image}" alt="${name}" class="employee-thumbnail"> ${name}`;
        listItem.onclick = function () {
            toggleEmployeeDetails(employee);
        };

        employeeNamesList.appendChild(listItem);
    }

    function toggleEmployeeDetails(employee) {
        if (selectedEmployeeId === employee.id) {
            selectedEmployeeId = null;
            closeEmployeeDetails();
        } else {
            const previousHighlighted = document.querySelector('.highlighted');
            if (previousHighlighted) {
                previousHighlighted.classList.remove('highlighted');
            }

            const selectedListItem = employeeNamesList.childNodes[employee.id - 1];
            selectedListItem.classList.add('highlighted');

            selectedEmployeeId = employee.id;
            showEmployeeDetails(employee);
        }
    }

    function showEmployeeDetails(employee) {
        employeeNameHeading.textContent = employee.name;
        employeeImage.src = `images/${employee.image}`;
        employeeImage.alt = `Image of ${employee.name}`;

        const infoText = `Age: ${employee.age}<br>
                           Position: ${employee.position}<br>
                           Employee since: ${employee.employeeSince}<br>
                           Salary: $${employee.salary}`;

        employeeInfoDiv.innerHTML = infoText;

        downloadCVLink.href = employee.cv;
        downloadCVLink.style.display = 'inline-block';

        // Set the position of employeeDetails to be right under the clicked employee name
        const selectedListItem = employeeNamesList.childNodes[employee.id - 1];
        const listItemRect = selectedListItem.getBoundingClientRect();
        employeeDetailsSection.style.top = `${listItemRect.bottom}px`;

        employeeDetailsSection.style.display = 'block';
    }

    function closeEmployeeDetails() {
        const selectedListItem = document.querySelector('.highlighted');
        if (selectedListItem) {
            selectedListItem.classList.remove('highlighted');
        }

        employeeNameHeading.textContent = '';
        employeeImage.src = '';
        employeeImage.alt = '';
        employeeInfoDiv.innerHTML = '';
        downloadCVLink.style.display = 'none';

        employeeDetailsSection.style.display = 'none';
    }
});
