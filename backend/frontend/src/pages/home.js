import hero from "../components/home/hero.js";
import plan from "../components/home/plan.js";
import services from "../components/home/services.js";
import finance from "../components/home/finance.js";
import process from "../components/home/process.js";

function home() {
    return `
		${hero()}
		${plan()}
		${services()}
		${finance()}
		${process()}
	
	`;
}
export default home;
