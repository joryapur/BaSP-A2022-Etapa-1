window.onload = function () {
  var main = document.getElementById("main");
  var form = document.getElementById("form");
  var inputFirstName = document.getElementById("firstName");
  var inputLastName = document.getElementById("lastName");
  var inputDNI = document.getElementById("dni");
  var inputPhone = document.getElementById("phone");
  var inputBirthDate = document.getElementById("birthDate");
  var inputCity = document.getElementById("city");
  var inputAddress = document.getElementById("address");
  var inputPostalCode = document.getElementById("postalCode");
  var inputEmail = document.getElementById("email");
  var inputPass = document.getElementById("pass");
  var inputRepeatPass = document.getElementById("repeatPass");
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

  function isNumber(val) {
    valOk = val * 3;
    if (valOk) {
      return true;
    } else {
      return false;
    }
  }

  function spaceInString(chars) {
    var space = " ";
    for (var i = 0; i < chars.length; i++) {
      if (space.indexOf(chars.charAt(i), 0) != -1) {
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
  //aca falta agregarle algo porque si es un simbolo no funciona, si es un numero no importa
  //porque esta la otra funcion de numeros

  function isLetters(word) {
    if (word.toUpperCase() !== word.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  function showInvalid(field) {
    field.classList.add("invalidValue");
    alertError.innerText = "Incorrect username or password";
    form.appendChild(alertError);
  }

  function showValid(field) {
    field.classList.add("validValue");
  }

  function validateFirstName() {
    nameLength = inputFirstName.value.length;
    nameValue = inputFirstName.value;
    nameLengthValid = nameLength > 3 && nameLength < 50;
    notNumbs = containsNums(nameValue) == false;
    if (nameLengthValid && notNumbs) {
      showValid(inputFirstName);
      return true;
    } else {
      showInvalid(inputFirstName);
    }
  }

  function validateLastName() {
    lastNameLength = inputLastName.value.length;
    lastNameValue = inputLastName.value;
    lastNameLengthValid = lastNameLength > 3 && lastNameLength < 50;
    notNumbs = containsNums(lastNameValue) == false;
    if (lastNameLengthValid && notNumbs) {
      showValid(inputLastName);
      return true;
    } else {
      showInvalid(inputLastName);
    }
  }

  function validateDNI() {
    dniLength = inputDNI.value.length;
    dniValue = inputDNI.value;
    dniLengthValid = dniLength > 7 && dniLength < 10;
    onlyNums = isNumber(dniValue);
    if (onlyNums && dniLengthValid) {
      showValid(inputDNI);
      return true;
    } else {
      showInvalid(inputDNI);
    }
  }

  function validatePhone() {
    phoneLength = inputPhone.value.length;
    phoneValue = inputPhone.value;
    phoneLengthValid = phoneLength === 10;
    onlyNums = isNumber(phoneValue);
    if (onlyNums && phoneLengthValid) {
      showValid(inputPhone);
      return true;
    } else {
      showInvalid(inputPhone);
    }
  }

  function validateCity() {
    cityLength = inputCity.value.length;
    cityValue = inputCity.value;
    cityLengthValid = cityLength > 3;
    if (cityLengthValid) {
      showValid(inputCity);
      return true;
    } else {
      showInvalid(inputCity);
    }
  }

  function validateAddress() {
    addressLength = inputAddress.value.length;
    addressValue = inputAddress.value;
    addressLengthValid = addressLength > 5;
    numInAddress = containsNums(addressValue);
    addresSpace = spaceInString(addressValue);
    if (addressLengthValid && numInAddress && addresSpace) {
      showValid(inputAddress);
      return true;
    } else {
      showInvalid(inputAddress);
    }
  }

  function validateBirthDate() {
    birthDateLength = inputBirthDate.value.length;
    birthDateValue = inputBirthDate.value;
    birthDateValid = birthDateValue !== "";
    if (birthDateValid) {
      showValid(inputBirthDate);
      return true;
    } else {
      showInvalid(inputBirthDate);
    }
  }

  function validatePostalCode() {
    postalLength = inputPostalCode.value.length;
    postalValue = inputPostalCode.value;
    postalLengthValid = postalLength === 4 || postalLength === 5;
    onlyNums = isNumber(postalValue);
    if (onlyNums && postalLengthValid) {
      showValid(inputPostalCode);
      return true;
    } else {
      showInvalid(inputPostalCode);
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

  function validatePass() {
    var passLength = inputPass.value.length;
    var passValue = inputPass.value;
    var upperInPass = upperCaseInString(passValue);
    var numInPass = containsNums(passValue);
    if (passLength >= 8 && passLength <= 30 && numInPass && upperInPass) {
      showValid(inputPass);
      return true;
    } else {
      showInvalid(inputPass);
    }
  }

  function validateRepeat() {
    var passOk = validatePass() == true;
    var pass1 = inputPass.value;
    var passRepeat = inputRepeatPass.value;
    console.log(passRepeat);
    if (passOk) {
      if (pass1 === passRepeat) {
        showValid(inputRepeatPass);
        return true;
      } else {
        showInvalid(inputRepeatPass);
      }
    } else {
      showInvalid(inputRepeatPass);
    }
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    alertError.innerText = "";
  }

  submit.onclick = function (e) {
    e.preventDefault();
    nameOk = validateFirstName(inputFirstName.value);
    lastOk = validateLastName(inputLastName.value);
    dniOk = validateDNI(inputDNI);
    phoneOk = validatePhone(inputPhone);
    birthOk = validateBirthDate(inputBirthDate);
    cityOk = validateCity(inputCity);
    addressOk = validateAddress(inputAddress);
    poscodeOk = validatePostalCode(inputPostalCode);
    repeatOk = validateRepeat(inputRepeatPass);
    mailIsOk = validateEmail(inputEmail.value);
    passIsOk = validatePass(inputPass.value);
    if (
      passIsOk &&
      mailIsOk &&
      nameOk &&
      lastOk &&
      dniOk &&
      phoneOk &&
      birthOk &&
      cityOk &&
      addressOk &&
      poscodeOk &&
      repeatOk
    ) {
      alert(
        "First Name : " +
          inputFirstName.value +
          "    " +
          "LastName: " +
          inputLastName.value +
          "    " +
          "Dni: " +
          inputDNI.value +
          "    " +
          "Phone: " +
          inputPhone.value +
          "    " +
          "Birth date: " +
          inputBirthDate.value +
          "    " +
          "City: " +
          inputCity.value +
          "    " +
          "Address: " +
          inputAddress.value +
          "    " +
          "Postal code: " +
          inputPostalCode.value +
          "    " +
          "Email: " +
          inputEmail.value +
          "    " +
          "Password: " +
          inputPass.value +
          "    " +
          "Confirm Password: " +
          inputRepeatPass.value
      );
    } else {
      alert("Incorrect values");
    }
    ("");
  };

  inputFirstName.addEventListener("blur", validateFirstName);
  inputLastName.addEventListener("blur", validateLastName);
  inputDNI.addEventListener("blur", validateDNI);
  inputPhone.addEventListener("blur", validatePhone);
  inputBirthDate.addEventListener("blur", validateBirthDate);
  inputCity.addEventListener("blur", validateCity);
  inputAddress.addEventListener("blur", validateAddress);
  inputPostalCode.addEventListener("blur", validatePostalCode);
  inputEmail.addEventListener("blur", validateEmail);
  inputPass.addEventListener("blur", validatePass);
  inputRepeatPass.addEventListener("blur", validateRepeat);
  form.addEventListener("focusin", normalizeInput);
};
