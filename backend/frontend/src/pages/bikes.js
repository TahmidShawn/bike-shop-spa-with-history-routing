async function bikes() {
    const res = await fetch(
        "https://bike-shop-spa-with-history-routing-4.onrender.com/api/bikes",
    );
    const bikes = await res.json();

    return `

        ${bikes
            .map(
                (bike) => `
            <div>
                <h3>${bike.name}</h3>
                <p>$${bike.price}</p>

                <a href="/bikes/${bike.id}" data-link>
                    View Details
                </a>
            </div>
        `,
            )
            .join("")}
    `;
}

export default bikes;
