const loading = () => {
    return `
        <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50">
           
            <div class="w-14 h-14 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

            <h2 class="mt-6 text-xl font-semibold text-gray-900">
                Loading Premium Bike Shop
            </h2>

            <p class="mt-2 text-sm text-gray-500 text-center max-w-xs">
                Preparing your ride experience... please wait a moment.
            </p>
        </div>
    `;
};

export default loading;
