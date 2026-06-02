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
                      <h3 class="font-medium text-gray-900">Register your company</h3>
                      <p>
                          Fill in our registration form with your company details. After your registration,
                          our leasing partner will do a credit check. You will hear whether your application
                          has been approved within 24 hours.
                      </p>
                  </div>

                  <div>
                      <h3 class="font-medium text-gray-900">Determine the requirements</h3>
                      <p>
                          You get access to the digital platform. Set the requirements for your employees
                          and share the registration link.
                      </p>
                  </div>

                  <div>
                      <h3 class="font-medium text-gray-900">Ride your bike!</h3>
                      <p>
                          Let's go! Your employees can choose their bikes and they'll be delivered straight
                          to their homes.
                      </p>
                  </div>

                  <div>
                      <h3 class="font-medium text-gray-900">Administration</h3>
                      <p>
                          Everything in one place. The digital platform gives you an easy overview of all
                          the information for your payroll.
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
