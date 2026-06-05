async function bikes() {
    const res = await fetch("http://localhost:3000/api/bikes");
    const bikes = await res.json();

    const categories = ["All", ...new Set(bikes.map((b) => b.category))];

    return `
	<!-- header -->
    <section class="relative py-20 px-4 text-white bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1619415254624-54e5a71b5d81?w=1200')">

        <div class="absolute inset-0 bg-black/60"></div>

        <div class="relative max-w-7xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold">
                Discover Your Perfect E-Bike
            </h1>

            <p class="text-gray-200 mt-4 max-w-xl mx-auto">
                Explore premium electric bikes for every journey
            </p>
        </div>
    </section>

    <!-- filter -->
    <section class="bg-white border-b border-gray-300  sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 justify-between items-center">

            <input 
                type="text"
                placeholder="Search bikes..."
                class="w-full lg:w-80 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div class="flex flex-wrap gap-2">
                ${categories
                    .map(
                        (cat, i) => `
                    <button class="px-4 py-2 text-sm rounded-lg border transition
                        ${
                            i === 0
                                ? "bg-black text-white"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }">
                        ${cat}
                    </button>
                `,
                    )
                    .join("")}
            </div>
        </div>
    </section>

    <!-- cards -->
    <section class="bg-white min-h-screen py-12 px-4">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            ${bikes
                .map(
                    (bike) => `
                <div class="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

                    
                    <div class="overflow-hidden h-52 bg-gray-100">
                        <img 
                            src="${bike.image}" 
                            class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                    </div>

                   
                    <div class="p-4 space-y-3">

                        <div class="flex items-center justify-between">
                            <h3 class="text-gray-900 font-semibold">
                                ${bike.name}
                            </h3>

                            <span class="text-xs bg-black text-white px-2 py-1 rounded-full">
                                ${bike.category}
                            </span>
                        </div>

                        <p class="text-sm text-gray-500">
                            ⭐ ${bike.rating} (${bike.reviews})
                        </p>

                        <div class="flex items-center justify-between">
                            <p class="text-lg font-bold text-gray-900">
                                $${bike.price}
                            </p>

                            <span class="text-xs text-gray-500">
                                ${bike.brand}
                            </span>
                        </div>

                        <a 
                            href="/bikes/${bike.id}" 
                            data-link
                            class="block text-center bg-black text-white py-2.5 rounded-lg hover:bg-gray-900 transition"
                        >
                            View Details
                        </a>

                    </div>
                </div>
            `,
                )
                .join("")}
        </div>
    </section>
    `;
}

export default bikes;
