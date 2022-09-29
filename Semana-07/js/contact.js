window.onload = function () {
  var form = document.getElementById("form");
  var inputName = document.getElementById("name");
  var inputEmail = document.getElementById("mail");
  var inputArea = document.getElementById("area");
  var inputmessage = document.getElementById("message");
  var submit = document.getElementById("submit");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var invalidAlert = document.createElement("p");
  var node = document.createTextNode("");
  invalidAlert.classList.add("error-msg");

  function containsNums(string) {
    var nums = "0123456789";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function isNotLetter(string) {
    for (var i = 0; i < string.length; i++) {
      char = string[i];
      if (char.toUpperCase() == char.toLowerCase()) {
        return true;
      }
    }
  }

  function showValid(field) {
    field.classList.add("validValue");
  }

  function showInvalid(field, msg) {
    field.classList.add("invalidValue");
    node.textContent = msg;
    invalidAlert.appendChild(node);
    field.insertAdjacentElement("beforebegin", invalidAlert);
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    invalidAlert.remove();
  }

  function validateName() {
    nameLength = inputName.value.length;
    nameValue = inputName.value;
    nameLengthValid = nameLength > 3 && nameLength < 50;
    notNumbs = containsNums(nameValue) == false;
    onlyLetters = isNotLetter(nameValue) == undefined;
    if (nameLengthValid && notNumbs && onlyLetters) {
      showValid(inputName);
      return true;
    } else {
      showInvalid(inputName, "Between 3 & 50 chars. Only letters");
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
      showInvalid(inputmessage, "More than 3 chars");
    }
  }

  function validateEmail() {
    if (emailExpression.test(inputEmail.value)) {
      showValid(inputEmail);
      return true;
    } else {
      showInvalid(inputEmail, "Valid email required");
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
      showInvalid(inputArea, "Pick an area");
    }
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
