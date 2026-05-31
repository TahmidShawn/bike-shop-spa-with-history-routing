import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import router from "../router/router.js";

const layout = () => {
    return `
		${navbar()}
		${router()}
		${footer()}
	
	`;
};

export default layout;
