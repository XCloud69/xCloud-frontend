import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselItemsData } from "../data/carouselItems";

const Main = () => {
	return (
		<main className='container mx-auto w-full overflow-hidden p-4 sm:p-8 xl:px-[92px] xl:py-16  flex flex-col items-center justify-center gap-4'>
			<h2 className='text-primary-heading-text-color font-bold text-sm text-center sm:text-[32px] xl:text-[40px]'>
				Discover What you can do in X-Cloud
			</h2>
			<Carousel className='w-full max-w-[150px] sm:max-w-xs md:max-w-xl lg:max-w-4xl'>
				<CarouselContent className='-ml-4 sm:-ml-4'>
					{carouselItemsData.map((item) => (
						<CarouselItem
							className='pl-0.5 sm:pl-4 md:basis-1/2 lg:basis-1/4 '
							key={item.title}>
							<Card className='w-full h-[365px] bg-skyblue-50 cursor-pointer hover:shadow-lg hover:shadow-skyblue-200 rounded-xs border-0 transition-shadow'>
								<CardContent>
									<img
										className='max-w-full object-cover'
										src={item.img}
										alt={item.title}
									/>
									<div className='flex flex-col justify-center gap-2 mt-2'>
										<p className='text-start mt-2 text-primary-heading-text-color font-semibold text-sm sm:font-bold sm:text-lg'>
											{item.title}
										</p>
										{item.features.map((feature, index) => (
											<div
												key={index}
												className='flex items-center gap-1 sm:gap-2'>
												<img
													className='size-3 sm:size-5'
													src={feature.icon}
													alt='icon'
												/>
												<p className='font-normal sm:font-bold text-xs sm:text-sm text-primary-text-color'>
													{feature.text}
												</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='size-0 sm:size-6 bg-skyblue-500 text-white hover:bg-skyblue-600 hover:text-white hover:scale-[1.2] cursor-pointer disabled:opacity-0' />
				<CarouselNext className='size-0 sm:size-6 bg-skyblue-500 text-white hover:bg-skyblue-600 hover:text-white hover:scale-[1.2] cursor-pointer disabled:opacity-0' />
			</Carousel>
		</main>
	);
};

export default Main;
