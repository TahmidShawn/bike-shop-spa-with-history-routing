const navbar = () => {
    return `
		<nav class="layout-wrapper flex justify-between items-center py-3">
            <h2 class="text-xl">E-Ride</h2>
            <div class="space-x-8 text-lg">
                <a href="/" data-link>Home</a>
                <a href="/about" data-link>About</a>
                <a href="/bikes" data-link>Bikes</a>
            </div>
            <div class="space-x-6 text-xl">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-user"></i>
            </div>
        </nav>
	`;
};

export default navbar;
