const guessNumber = document.querySelector('#guessNumber');
const chkBtn = document.querySelector('.button');
const output = document.querySelector('#output');
const numToBeGuessed = generateNum();
let chances = 3;
guessNumber.focus();

//event listeners
chkBtn.addEventListener('click', chkNumber);

function chkNumber(e) {
	if (chkBtn.textContent === 'Play Again') {
		window.location.reload();
	} else {
		num = Number(guessNumber.value);

		if (num == ' ') {
			changeOutput('red', 'Enter a valid Number !!!');
		} else {
			if (num === numToBeGuessed) {
				changeOutput('green', 'You Guessed It Right !!!');
				disableBtn();
			} else {
				if (chances === 1) {
					changeOutput('red', 'You Lost !!! Play Again ...');
					disableBtn();
				} else {
					chances--;
					guessNumber.value = '';
					changeOutput(
						'red',
						`Wrong Answer !!! Try Again chances ${chances} left`,
					);
					guessNumber.focus();
				}
			}
		}
	}
	e.preventDefault();
}
function changeOutput(color, message) {
	output.textContent = message;
	output.style.color = color;
}
function generateNum() {
	return Math.floor(Math.random() * 10) + 1;
}
function disableBtn() {
	guessNumber.disabled = true;
	chkBtn.textContent = 'Play Again';
}
