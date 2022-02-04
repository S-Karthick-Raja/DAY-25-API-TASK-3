fetch("https://61921f06aeab5c0017105d5e.mockapi.io/Cats")
  .then((data) => data.json())
  // upload the data to html

  // there is no images for some data in api
  .then((cats) =>
    cats.forEach((data) => {
      const flags = document.querySelector(".row");
      flags.innerHTML += ` 
       <img src="${data.avatar}" alt="cats"> `;
    })
  );