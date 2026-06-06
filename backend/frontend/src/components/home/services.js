const services = () => {
    return `
		<section class="relative w-full h-screen overflow-hidden">
			<img
				src="./src/assets/services.png"
				alt="Bike service"
				class="absolute inset-0 w-full h-full object-cover"
			/>

			<!-- overlay -->
			<div class="absolute inset-0 bg-black/50"></div>

			
			<div class="relative z-10 h-full flex items-center">
				<div class="max-w-xl ml-10 text-white">
				<h2 class="text-4xl md:text-5xl font-bold leading-tight">
					Service,<br />
					maintenance and<br />
					insurance
				</h2>

				<p class="mt-6 text-lg text-gray-200">
					
				</p>

				<p class="mt-4 text-gray-300 leading-relaxed">
					Keep your ride in top condition with our complete support system. From regular maintenance and expert servicing to reliable insurance coverage, we make sure your bike stays safe, smooth, and ready for every journey. Ride with confidence knowing we’ve got you covered at every step.
				</p>
				</div>
			</div>
		</section>
	
	`;
};

export default services;
