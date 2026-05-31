async function bike(id) {
    const res = await fetch(
        `https://bike-shop-spa-with-history-routing-4.onrender.com/api/bikes/${id}`,
    );

    if (!res.ok) {
        return "<h1>bike Not Found</h1>";
    }

    const bike = await res.json();

    return `
        <h1>${bike.name}</h1>
        <p>Price: $${bike.price}</p>
        <p>ID: ${bike.id}</p>
    `;
}

export default bike;
