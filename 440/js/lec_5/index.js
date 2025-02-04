axios
  .get("https://fakestoreapi.com/product")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
