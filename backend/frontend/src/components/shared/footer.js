const footer = () => {
    return `
  <footer class="layout-wrapper border-t border-gray-200">

      <div class=" py-12 md:py-16">

          <div class="flex flex-col md:flex-row justify-between gap-10">

              
              <div class="md:w-1/3">
                  <h2 class="text-xl font-semibold text-gray-900">
                      BikeLease
                  </h2>

                  <p class="mt-4 text-sm text-gray-600 leading-relaxed">
                      Smart and flexible bike leasing solutions for companies.
                      Fully serviced, insured, and ready for everyday mobility.
                  </p>
              </div>

             
              <div class="flex flex-col sm:flex-row gap-10 md:gap-16">

                  <div>
                      <h3 class="text-sm font-medium text-gray-900 mb-4">Company</h3>
                      <ul class="space-y-2 text-sm text-gray-600">
                          <li><a href="#" class="hover:text-black">About</a></li>
                          <li><a href="#" class="hover:text-black">How it works</a></li>
                          <li><a href="#" class="hover:text-black">Pricing</a></li>
                      </ul>
                  </div>

                  <div>
                      <h3 class="text-sm font-medium text-gray-900 mb-4">Support</h3>
                      <ul class="space-y-2 text-sm text-gray-600">
                          <li><a href="#" class="hover:text-black">Help Center</a></li>
                          <li><a href="#" class="hover:text-black">Contact</a></li>
                          <li><a href="#" class="hover:text-black">FAQ</a></li>
                      </ul>
                  </div>

                  <div>
                      <h3 class="text-sm font-medium text-gray-900 mb-4">Legal</h3>
                      <ul class="space-y-2 text-sm text-gray-600">
                          <li><a href="#" class="hover:text-black">Privacy</a></li>
                          <li><a href="#" class="hover:text-black">Terms</a></li>
                      </ul>
                  </div>

              </div>

          </div>

          <!-- Bottom bar -->
          <div class="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

              <p class="text-sm text-gray-500">
                  © ${new Date().getFullYear()} BikeLease. All rights reserved.
              </p>

              <p class="text-sm text-gray-500">
                  Built for modern mobility
              </p>

          </div>

      </div>

  </footer>
  `;
};

export default footer;
