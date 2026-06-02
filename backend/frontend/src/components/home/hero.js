const hero = () => {
    return `
		<div class="relative w-full h-[60vh] md:h-[calc(100vh-52px)]">
            <img
                src="./src/assets/hero.jpg"
                class="w-full h-full object-cover"
                alt=""
            />

            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center"
            >
                <h2
                    class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:font-medium tracking-wider whitespace-nowrap uppercase"
                >
                    Built for Riders. Designed for Freedom.
                </h2>
                <button
                    class="text-xl border-white border-2 mt-8 cursor-pointer rounded-xl bg-[#353533] px-10 lg:px-16 py-1 lg:py-2"
                >
                    Explore
                </button>
            </div>
        </div>
	`;
};

export default hero;
