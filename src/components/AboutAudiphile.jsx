function AboutAudiphile() {
	return (
		<div className="max-w-[1200px] mx-auto my-28 flex flex-col justify-center items-center xl:flex-row-reverse">
			<div className="w-full mx-4 md:mx-8">
				<div className="bg-[url(/src/assets/shared/mobile/image-best-gear.jpg)] md:bg-[url(/src/assets/shared/tablet/image-best-gear.jpg)] xl:bg-[url(/src/assets/shared/desktop/image-best-gear.jpg)] h-[300px] bg-no-repeat mx-4 md:mx-8 bg-cover bg-center rounded-xl xl:mx-0 xl:ml-16 xl:h-[580px]"></div>
			</div>
			<div className="mx-4 text-center md:mx-8 max-w-[580px] xl:text-start xl:max-w-[450px]">
				<h2 className="my-8 text-3xl font-bold uppercase md:text-5xl md:my-14 xl:mt-0">
					Bringing you the <span className="text-orange-main">best</span> audio
					gear
				</h2>
				<p className="text-[15px] leading-6 opacity-50">
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</div>
	)
}

export default AboutAudiphile
