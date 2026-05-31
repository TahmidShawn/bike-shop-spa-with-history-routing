async function bikes() {
    const res = await fetch(
        "https://bike-shop-spa-with-history-routing-4.onrender.com/api/bikes",
    );
    const bikes = await res.json();

    return `

        ${bikes
            .map(
                (p) => `
            <div>
                <h3>${p.name}</h3>
                <p>$${p.price}</p>

                <a href="/bikes/${p.id}" data-link>
                    View Details
                </a>
            </div>
        `,
            )
            .join("")}
    `;
}

export default bikes;
