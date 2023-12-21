import Destinations from "./Components/Destinations";
import Hotels from "./Components/Hotels";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialNetworks from "./Components/SocialNetworks";
import Pictures from "./Components/Pictures";
import { Footer } from "./Components/Footer";
import  MapForSite  from "./Components/GoogleMaps";
import { CustomCursor } from "./cursor/cursor";

/* Website created in 3 days. 
###bugs fixed 06.15.2023
Used: Reactjs, Tailwind CSS.
Installed packages or dependencies:
react-icons, framer-motion, @react-google-maps/api, google-map-react, react-scroll, @heroicons/react, react-intersection-observer;
Framer-motion once true, because responsive mode has problem.

You can find source code in: github.com/abdurahmon27
Contact with developer: t.me/abdurahmon_official
Description in uzbek:
Hech qanday copy pastesiz yaratilgan jizzaxguide 1.0.0 web app or just web blog
*/

function App() {
  return (
    
    <div className="">
      <CustomCursor />
      <SocialNetworks />
      <Navbar />
      <Home />
      <Destinations />
      <Hotels />
      <Pictures />
      <div className="w-full h-full flex items-center justify-center"><MapForSite /></div>
      <Footer />
    </div>
  );
}
export default App;
