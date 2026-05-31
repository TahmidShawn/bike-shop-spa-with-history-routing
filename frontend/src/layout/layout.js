import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

const layout = () => {
    return `
		${navbar()}
		<p>content</p>
		${footer()}
	
	`;
};

export default layout;
