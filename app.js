const options = {
    headers: {
      'coinranking1.p.rapidapi.com': 'dfe4fd6600msh819e8f5815689fdp1d232ajsn44d8aae8f404',
    },
  };
  
  fetch('https://api.coinranking.com/v2/coins', options)
    .then((response) => response.json())
    .then((result) => console.log(result));

    const containerDiv = document.querySelector('.container');

    result.forEach((coin) => {
        const table = document.createElement('table');
        table.classList.add('table');


        table.innerHTML = `

       
        `

        containerDiv.append(table);
    })
  