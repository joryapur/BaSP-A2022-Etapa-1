window.onload = function () {
  var main = document.getElementById("main");
  var form = document.getElementById("form");
  var inputEmail = document.getElementById("email");
  var inputPass = document.getElementById("pass");
  var submit = document.getElementById("submit");
  var divPass = document.getElementById("box-pass");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var invalidAlert = document.createElement("p");
  var node = document.createTextNode("");

  function containsNums(string) {
    var nums = "0123456789";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function upperCaseInString(word) {
    for (var i = 0; i < word.length; i++) {
      if (
        word.charAt(i) == word.charAt(i).toUpperCase() &&
        isNaN(word.charAt(i))
      ) {
        return true;
      }
    }
    return false;
  }

  function showValid(field) {
    field.classList.add("validValue");
  }

  function showInvalid(field, msg) {
    field.classList.add("invalidValue");
    node.textContent = msg;
    invalidAlert.appendChild(node);
    invalidAlert.classList.add("error-msg");
    field.parentNode.insertAdjacentElement("beforebegin", invalidAlert);
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    invalidAlert.remove();
  }

  function validateEmail() {
    if (emailExpression.test(inputEmail.value)) {
      showValid(inputEmail);
      return true;
    } else {
      showInvalid(inputEmail, "Valid E-mail required");
    }
  }

  function validatePass() {
    var passLength = inputPass.value.length;
    var passValue = inputPass.value;
    var upperInPass = upperCaseInString(passValue);
    var numInPass = containsNums(passValue);
    if (passLength >= 8 && passLength <= 30 && numInPass && upperInPass) {
      showValid(inputPass);
      return true;
    } else {
      showInvalid(
        inputPass,
        "More than 3 chars,1 number and Uppercase required"
      );
    }
  }

  submit.onclick = function (e) {
    e.preventDefault();
    var mailIsOk = validateEmail(inputEmail.value);
    var passIsOk = validatePass(inputPass.value);
    if (passIsOk && mailIsOk) {
      alert(`
      Email: ${inputEmail.value}
      Password: ${inputPass.value}`);
    } else {
      alert("Incorrect Username or Password");
    }
  };

  inputEmail.addEventListener("blur", validateEmail);
  inputPass.addEventListener("blur", validatePass);
  form.addEventListener("focusin", normalizeInput);
};
