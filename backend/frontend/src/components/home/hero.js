const hero = () => {
    return `
		<div class="relative w-full h-[60vh] md:h-[calc(100vh-52px)] overflow-hidden bg-black">

			<img
				src="./src/assets/hero.jpg"
				class="absolute right-0 top-0 h-full w-full md:w-3/4 object-cover"
				alt="Bike hero"
			/>

			<div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

			<div class="relative z-10 h-full flex items-center">
				<div class="ml-8 md:ml-20 max-w-xl text-white">

					<p class="text-xs tracking-[0.3em] text-gray-400 uppercase">
						Premium Bike Shop
					</p>

					<h2 class="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
						Built for Riders.<br />
						Designed for Freedom.
					</h2>

					<p class="mt-6 text-sm md:text-base text-gray-300 leading-relaxed">
						Discover high-quality bikes built for performance, comfort, and style. Ride freely with gear designed for every journey.
					</p>

					<div class="mt-8 w-16 h-[1px] bg-white/40"></div>

				</div>
			</div>

		</div>
  `;
};

export default hero;
