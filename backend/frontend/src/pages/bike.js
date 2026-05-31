async function bike(id) {
    const res = await fetch(`http://localhost:3000/api/bikes/${id}`);

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
