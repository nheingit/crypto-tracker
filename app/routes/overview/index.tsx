import { WalletCard } from '~/components/walletcard';
import { PriceChart } from '~/components/pricechart';
import { Chart } from 'chart.js';
import { useLoaderData } from '@remix-run/react';
export const loader = async () => {
	// e5716fd6-e217-4109-aaa7-a5113b251bf8

	const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD');
	const data = await res.json();
	const coinIds = data.coins.map((coinObj: any) => coinObj.id);
	const priceRequests = coinIds.map(async (coinId: 'string') => {
		console.log(coinId);
		return await fetch(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${coinId}`);
	});
	const priceResults = await Promise.all(priceRequests);
	const array = [];
	priceResults.map(async (o) => console.log(await o.json(), '~~~~~~~~~~~~~~~~~~~~~~~~~~\n'));
	//	const coinIds = data?.coins.map((coinInfo: any) => {
	//coinInfo?.id
	//})
	//	console.log(coinIds)
	const chartData = {
		labels: data.data.map((crypto: any) => crypto.name),
		datasets: [
			{
				label: 'Price in USD',
				data: data.data.map((crypto: any) => crypto.priceUsd),
				backgroundColor: [ '#ffbb11', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0' ]
			}
		]
	};
	return chartData;
};

export default function Overview() {
	const chartData = useLoaderData();
	return (
		<div className="grid h-full max-h-screen grid-flow-row grid-rows-5">
			<div className="grid justify-between w-full h-full grid-flow-col row-span-2 grid-col-8">
				<div className="h-full col-span-3">
					<WalletCard />
				</div>
				<div className="col-span-3">
					<WalletCard />
				</div>
			</div>
			<div className="w-full h-full row-span-3 mx-auto bg-gray-700">
				<PriceChart chartData={chartData} />
			</div>
		</div>
	);
}
