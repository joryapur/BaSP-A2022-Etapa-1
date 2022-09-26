window.onload = function () {
  var form = document.getElementById("form");
  var inputName = document.getElementById("name");
  var inputEmail = document.getElementById("mail");
  var inputArea = document.getElementById("area");
  var inputmessage = document.getElementById("message");
  var submit = document.getElementById("submit");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var alertError = document.createElement("h3");
  alertError.classList.add("redAlert");

  function containsNums(string) {
    var nums = "0123456789";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function showInvalid(field) {
    field.classList.add("invalidValue");
    alertError.innerText = "Incorrect values";
    form.appendChild(alertError);
  }

  function showValid(field) {
    field.classList.add("validValue");
  }

  function validateName() {
    nameLength = inputName.value.length;
    nameValue = inputName.value;
    nameLengthValid = nameLength > 3 && nameLength < 50;
    notNumbs = containsNums(nameValue) == false;
    if (nameLengthValid && notNumbs) {
      showValid(inputName);
      return true;
    } else {
      showInvalid(inputName);
    }
  }

  function validateMessage() {
    messageLength = inputmessage.value.length;
    messageValue = inputmessage.value;
    messageLengthValid = messageLength > 3;
    if (messageLengthValid) {
      showValid(inputmessage);
      return true;
    } else {
      showInvalid(inputmessage);
    }
  }

  function validateEmail() {
    if (emailExpression.test(inputEmail.value)) {
      showValid(inputEmail);
      return true;
    } else {
      showInvalid(inputEmail);
    }
  }

  function validateArea() {
    areaLength = inputArea.value.length;
    areaValue = inputArea.value;
    areaValid = areaValue !== "";
    if (areaValid) {
      showValid(inputArea);
      return true;
    } else {
      showInvalid(inputArea);
    }
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    alertError.innerText = "";
  }

  submit.onclick = function (e) {
    e.preventDefault();
    nameOk = validateName(inputName.value);
    mailIsOk = validateEmail(inputEmail.value);
    if (mailIsOk && nameOk) {
      alert(
        "Name : " +
          inputName.value +
          "    " +
          "Email: " +
          inputEmail.value +
          "    " +
          "Area: " +
          inputArea.value +
          "    " +
          "Message: " +
          inputmessage.value
      );
    } else {
      alert("Incorrect values");
    }
  };

  inputName.addEventListener("blur", validateName);
  inputEmail.addEventListener("blur", validateEmail);
  inputArea.addEventListener("blur", validateArea);
  inputmessage.addEventListener("blur", validateMessage);
  form.addEventListener("focusin", normalizeInput);
};
