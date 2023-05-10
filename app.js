const options = {
    headers: {
        "X-RapidAPI-Key": "", // Pane siia ikka enda oma
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
};

fetch("https://api.coinranking.com/v2/coins", options)
    .then((response) => response.json())
    .then((result) => {
        const tableBody = document.querySelector(".table-body");

        result.data.coins.forEach((coin) => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td>
                  <img class="coin-image" src="${coin.iconUrl}" />
                </td>
                <td>#${coin.rank}</td>
                <td>${coin.name}</td>
                <td>${coin.symbol}</td>
                <td class="text-right">${Number(coin.price).toFixed(2)} €</td>
              `;

            tableBody.append(tableRow);
        });
    });
