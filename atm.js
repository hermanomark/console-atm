atm = {
  bal: 0,
  pin: "1234",
  generatePin(pin) {
    if (isNaN(pin) || pin === '') {
      console.log("Error: Please Input a Number");
    }
    else {
      this.pin = "";
      let myPin = pin.toString();
      if (myPin.length === 4) { 
        this.pin = myPin;
        console.log("Congratulations you've setup your pin code");
      }
      else {
        console.log("Please Input 4 Digits Only");
      }
    }
  },
  balance(pin) {
    if (pin !== undefined && pin !== '' && pin.toString() === this.pin) {
      console.log("Remaining balance: " + this.bal);
    }
    else {
      console.log("Invalid Pin");
    }
  },
  deposit(pin, num){
    if (pin !== undefined && pin !== '' && pin.toString() === this.pin) {
      if (isNaN(num) || num === '') {
        console.log("Error: Please Input a Number");
      }
      else {
        this.bal = this.bal + num;
        console.log("Amount deposited: " + num);
        this.balance(pin.toString());
      }
    }
    else {
      console.log("Invalid Pin");
    }
  },
  widthraw(pin, num) {
    if (pin !== undefined && pin !== '' && pin.toString() === this.pin) {
      if (isNaN(num) || num === '') {
        console.log("Error: Please Input a Number");
      }
      else {
        if (num > this.bal) { 
          console.log("You have insufficient funds.");
          this.balance(pin.toString());
        }
        else {
          this.bal = this.bal - num;
          console.log("Amount widthrawn: " + num);
          this.balance(pin.toString());
        }
      }
    }
  else {
    console.log("Invalid Pin");
    }
  }
}