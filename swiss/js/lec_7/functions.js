export let getUserName = () => {
  return "userName";
};

let sayHello = () => {
  return "Hello " + getUserName();
};

export let printMessage = () => {
  console.log(sayHello());
};
