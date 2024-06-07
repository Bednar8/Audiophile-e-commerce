import BasketProductSummary from "./BasketProductSummary"
import ButtonLink from "./ButtonLink"

function Summary() {
	const paySummary = [
		{
			name: "total",
			cost: 5311,
		},
		{
			name: "shipping",
			cost: 50,
		},
		{
			name: "vat",
			cost: 1024,
		},
		{
			name: "grand total",
			cost: 5361,
		},
	]
	return (
		<div className="bg-white rounded-lg px-6 py-8">
			<h4 className="uppercase text-lg font-bold mb-7">summary</h4>
			<ul className="flex justify-between items-center">
				<BasketProductSummary />
				<p className="font-bold text-[15px] opacity-50">x1</p>
			</ul>
			<div className="my-8">
				{paySummary.map((el, i) => (
					<div
						key={i}
						className={`${
							el.name === "grand total" && "mt-5"
						} flex justify-between items-center my-2`}>
						<p className="uppercase text-[15px] opacity-50">{el.name}</p>
						<p
							className={`${
								el.name === "grand total" && "text-orange-main"
							} text-lg font-bold`}>
							${el.cost}
						</p>
					</div>
				))}
			</div>
			<ButtonLink isWidthFull={true}>continue & pay</ButtonLink>
		</div>
	)
}

export default Summary
