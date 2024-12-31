let fanStatus = false;
let fanSpeed = 1;

function toggleFan() {
  if (fanStatus == false) {
    fanStatus = true;
    fanSpeed = 1;
    console.log("Fan is Open");
    console.log("Fan speed is " + fanSpeed);
  } else {
    fanStatus = false;
    console.log("Fan is close");
  }
}

function incrementSpeed() {
  //   fanSpeed = fanSpeed + 1;
  //   fanSpeed++;
  if (fanSpeed < 3 && fanStatus == true) {
    fanSpeed += 1;
    console.log("Fan Speed is " + fanSpeed);
  }
}

function decrementSpeed() {
  //   fanSpeed--;
  //   fanSpeed = fanSpeed - 1;
  if (fanSpeed > 1 && fanStatus == true) {
    fanSpeed -= 1;
    console.log("Fan Speed is " + fanSpeed);
  }
}
