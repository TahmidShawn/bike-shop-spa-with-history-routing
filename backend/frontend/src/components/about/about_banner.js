const aboutBanner = () => {
    return `
		<div class="relative w-full h-[60vh] md:h-[calc(100vh-52px)] overflow-hidden bg-black">

			<img
				src="https://images.unsplash.com/photo-1623206887023-a6f994a309dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
					Quality bikes </br> for every smooth ride.
					</h2>

					<p class="mt-6 text-sm md:text-base text-gray-300 leading-relaxed">
						Premium Bike Shop is dedicated to bringing you reliable, stylish, and performance-driven bikes for every journey. From daily commuting to long-distance adventures, we focus on comfort, durability, and modern design to make every ride enjoyable and effortless.
					</p>

					<div class="mt-8 w-16 h-[1px] bg-white/40"></div>

				</div>
			</div>

		</div>
	`;
};

export default aboutBanner;
