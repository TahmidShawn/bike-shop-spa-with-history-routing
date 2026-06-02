import hero from "../components/home/hero.js";
import plan from "../components/home/plan.js";
import services from "../components/home/services.js";

function home() {
    return `
		${hero()}
		${plan()}
		${services()}
	
	`;
}
export default home;
