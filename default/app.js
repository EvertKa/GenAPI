const options = {
    headers: {
        "X-RapidAPI-Key": "dfe4fd6600msh819e8f5815689fdp1d232ajsn44d8aae8f404",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
};

fetch("https://api.coinranking.com/v2/coins", options)
    .then((response) => response.json())
    .then((result) => {
        const tableBody = document.querySelector(".table-body");

        result.data.coins.forEach((coin) => {
            const table = document.createElement("tr");
            table.innerHTML = `
                <td>
                <img class="coin-image" src="${coin.iconUrl}" />
                </td>
                <td>${coin.name}</td>
                <td>${coin.symbol}</td>
                <td>#${coin.rank}</td>
                <td class="text-right">${Number(coin.price).toFixed(2)} €</td>
              `;

            tableBody.append(table);
        });
    });