const plan = () => {
    return `
		<section class="layout-wrapper">
			<div class="flex flex-col-reverse md:flex-row items-center gap-10 my-14">

				<div class="w-full md:w-1/2">
					<img 
						src="https://images.unsplash.com/photo-1640835521309-b93837e276be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxwZW9wbGUlMjBvbiUyMGUlMjBiaWtlfGVufDB8fDB8fHww"
						alt="bike"
						class="w-full md:w-[500px] h-[400px] md:h-[550px] object-cover shadow-lg"
					/>
				</div>

				
				<div class="w-full md:w-1/2 text-center md:text-left">
					<h1 class="text-3xl md:text-4xl font-medium uppercase mb-4">
						Bike plan for employees
					</h1>

					<p class="text-gray-600 text-lg mb-6 leading-relaxed">
						We provide structured bike training plans for employees to improve safety, confidence, and riding skills. Learn with expert guidance and modern techniques.
					</p>

					<button class="">
						Learn More
					</button>
				</div>

			</div>
		</section>
    `;
};

export default plan;
