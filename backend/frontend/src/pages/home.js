import hero from "../components/home/hero.js";
import plan from "../components/home/plan.js";

function home() {
    return `
		${hero()}
		${plan()}
	
	`;
}
export default home;
