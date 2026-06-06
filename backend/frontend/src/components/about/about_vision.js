const aboutVision = () => {
    return `
		<section class="layout-wrapper">
			<div class="flex flex-col-reverse md:flex-row-reverse items-center gap-10 my-14">

				<div class="w-full md:w-1/2">
					<img 
						src="https://images.unsplash.com/photo-1624243519828-52a0f2c88af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZSUyMGJpa2V8ZW58MHx8MHx8fDA%3D"
						alt="bike"
						class="w-full md:w-[500px] h-[400px] md:h-[550px] object-cover shadow-lg"
					/>
				</div>

				
				<div class="w-full md:w-1/2 text-center md:text-left">
					<h1 class="text-3xl md:text-4xl font-medium uppercase mb-4">
						Driving Freedom on Every Road
					</h1>

					<p class="text-gray-600 text-lg mb-6 leading-relaxed">
						Our vision is to inspire a world where every ride brings freedom, joy, and confidence. We aim to make high-quality biking accessible to everyone by offering reliable, stylish, and performance-driven bikes that enhance everyday travel and adventure.
					</p>

					<button class="">
						Learn More
					</button>
				</div>

			</div>
		</section>
	`;
};

export default aboutVision;
