import { images } from "@/shared/assets";
import Heading from "./components/Heading";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar";

const HomePage = () => {
	return (
		<div>
			<div
				className='w-full bg-cover min-h-[220px] md:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[400px] bg-no-repeat bg-bottom'
				style={{
					backgroundImage: `url(${images.homePageBackgroung})`,
				}}>
				<Navbar />
				<Heading />
			</div>
			<Main />
			<Footer />
		</div>
	);
};

export default HomePage;
