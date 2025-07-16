function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	displayError('')

	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number<br>'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number<br>'
	}

	// Get expiration values
	const month = parseInt(this.expiry.value, 10)
	const year = parseInt(this.expiryYear.value, 10)

	const now = new Date()
	const currentYear = now.getFullYear() % 100 // get last two digits
	const currentMonth = now.getMonth() + 1 // JS months are 0-based

	if (isNaN(month) || month < 1 || month > 12) {
		errorMsg += 'Expiration month is invalid<br>'
	}
	if (isNaN(year) || year < currentYear || year > currentYear + 20) {
		errorMsg += 'Expiration year is invalid<br>'
	} else if (year === currentYear && month < currentMonth) {
		errorMsg += 'Expiration date must be in the future<br>'
	}

	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)