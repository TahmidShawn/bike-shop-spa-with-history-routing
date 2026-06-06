const process = () => {
    return `
  <section class="layout-wrapper">

      <div class="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 my-14">

          
          <div class="md:w-1/2">

    <h2 class="text-3xl md:text-4xl font-semibold text-gray-900">
        How it works
    </h2>

    <div class="mt-8 space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">

        <div>
            <h3 class="font-medium text-gray-900">Choose your bike</h3>
            <p>
                Browse our collection and select the bike that fits your style, needs, and budget.
                From city rides to mountain adventures, we’ve got something for everyone.
            </p>
        </div>

        <div>
            <h3 class="font-medium text-gray-900">Place your order</h3>
            <p>
                Add your chosen bike to the cart and complete a simple checkout process.
                Our system ensures a fast and secure purchase experience.
            </p>
        </div>

        <div>
            <h3 class="font-medium text-gray-900">Fast delivery</h3>
            <p>
                We prepare and deliver your bike straight to your doorstep with care and safety,
                so it arrives ready to ride.
            </p>
        </div>

        <div>
            <h3 class="font-medium text-gray-900">Ride & enjoy</h3>
            <p>
                Unbox your bike, take it for a ride, and enjoy smooth performance backed by
                quality engineering and support.
            </p>
        </div>

    </div>

</div>

        
          <div class="md:w-1/2 w-full flex justify-center items-center">

              <div class="w-full md:w-[95%] lg:w-[95%]">

                  <img
                      src="https://images.unsplash.com/photo-1673972837596-3ff35787ebf5?w=900&auto=format&fit=crop"
                      alt="How it works"
                      class="w-full h-[650px] object-cover rounded-lg shadow-sm"
                  />

              </div>

          </div>

      </div>

  </section>
  `;
};

export default process;
