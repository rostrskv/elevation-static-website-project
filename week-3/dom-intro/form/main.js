const button = document.getElementById("submit")
const errorMessage = document.getElementById("error-message")
const validate = function () {
    const getValidationMessage = function(name, salary, birthday, phone)
    {
        let errors = []
        if(!(name.length > 2))
        {
            errors.push("Name must be longer than 2 characters")
        }
        if(!(salary > 10_000 && salary < 16_000 ))
        {
            errors.push("Salary must be greater than 10,000 but less than 16,000")
        }
        if(!birthday)
        {
            errors.push("Birthday should be set")
        }
        if(!phone.match(/^\d{10}$/))
        {
            errors.push("Phone must be 10 digits long")
        }
        return errors
    }
    errorMessage.innerHTML = getValidationMessage(
        document.getElementById("name").value,
        document.getElementById("salary").valueAsNumber,
        document.getElementById("birthday").valueAsDate,
        document.getElementById("phone").value,
    ).join("<br>")
}
button.onclick = validate