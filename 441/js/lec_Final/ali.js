let getUserName = () => {
  // axios => userName
  return "Ali";
};

let helloUser = () => {
  console.log(`Welcome ${getUserName()}`);
};

let renderHeader = () => {
  let header = document.querySelector("header");
  header.innerHTML = `
    <nav>
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
    </nav>
  `;
};

export { helloUser, renderHeader };
