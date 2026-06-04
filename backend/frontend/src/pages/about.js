import aboutBanner from "../components/about/about_banner.js";
import aboutMission from "../components/about/about_mission.js";
import aboutVision from "../components/about/about_vision.js";

function about() {
    return `
		${aboutBanner()}
		${aboutMission()}
		${aboutVision()}
	`;
}
export default about;
