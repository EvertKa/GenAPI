const url = 'https://api.coinranking.com/v2/coins';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfe4fd6600msh819e8f5815689fdp1d232ajsn44d8aae8f404',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

async function coin() {
	const response = await fetch(url, options);
	const  result  = await response.json();
    console.log(result)

    return result;
}

coin().then(result => {
    result;

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
            <td class="text-right">${Number(coin.price).toFixed(2)} €</td>`;

        tableBody.append(table);
    });
});

