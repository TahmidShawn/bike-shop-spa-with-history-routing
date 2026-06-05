async function bike(id) {
    const res = await fetch(`https://bike-shop-spa-with-history-routing-4.onrender.com/api/bikes/${id}`);
    const bike = await res.json();

    return `
    
    <section class="bg-white px-4 pt-6">
        <div class="layout-wrapper mx-auto text-sm text-gray-500 flex items-center gap-2">
            <a href="/" data-link class="hover:text-black transition">Home</a>
            <span>/</span>
            <a href="/bikes" data-link class="hover:text-black transition">Bikes</a>
            <span>/</span>
            <span class="text-gray-900 font-medium">
                ${bike.name}
            </span>
        </div>
    </section>

    <section class="bg-white min-h-screen py-10 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

           
            <div class="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                <img 
                    src="${bike.image}" 
                    alt="${bike.name}"
                    class="w-full h-full object-cover"
                />
            </div>

            
            <div class="space-y-6">

                
                <div>
                    <h1 class="text-3xl font-bold text-gray-900">
                        ${bike.name}
                    </h1>

                    <p class="text-gray-500 mt-2">
                        ${bike.description}
                    </p>
                </div>

                
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 text-sm bg-black text-white rounded-full">
                        ${bike.category}
                    </span>

                    <span class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                        ${bike.brand}
                    </span>

                    <span class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                        ⭐ ${bike.rating} (${bike.reviews})
                    </span>
                </div>

                
                <div class="text-3xl font-bold text-gray-900">
                    $${bike.price}
                </div>

                
                <div class="flex gap-3">
                    <button class="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition">
                        Buy Now
                    </button>

                    <button class="px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                        Add to Cart
                    </button>
                </div>

                
                <div class="border-t pt-6 space-y-3">

                    <h2 class="text-lg font-semibold text-gray-900">
                        Specifications
                    </h2>

                    <div class="grid grid-cols-2 gap-4 text-sm">

                        <div class="p-3 bg-gray-50 rounded-lg">
                            <p class="text-gray-500">Battery</p>
                            <p class="font-semibold text-gray-900">${bike.battery}</p>
                        </div>

                        <div class="p-3 bg-gray-50 rounded-lg">
                            <p class="text-gray-500">Motor</p>
                            <p class="font-semibold text-gray-900">${bike.motor}</p>
                        </div>

                        <div class="p-3 bg-gray-50 rounded-lg">
                            <p class="text-gray-500">Range</p>
                            <p class="font-semibold text-gray-900">${bike.range}</p>
                        </div>

                        <div class="p-3 bg-gray-50 rounded-lg">
                            <p class="text-gray-500">Top Speed</p>
                            <p class="font-semibold text-gray-900">${bike.topSpeed}</p>
                        </div>

                        <div class="p-3 bg-gray-50 rounded-lg">
                            <p class="text-gray-500">Weight</p>
                            <p class="font-semibold text-gray-900">${bike.weight}</p>
                        </div>

                        <div class="p-3 bg-gray-50 rounded-lg">
                            <p class="text-gray-500">Color</p>
                            <p class="font-semibold text-gray-900">${bike.color}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}

export default bike;
