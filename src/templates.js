import StorePNG from './assets/store.png';

import StoreLandingIMG from './assets/store/preview_landing.png';
import StoreProductsIMG from './assets/store/preview_products.png';

const Templates = [
	{
		name: 'Adrens Store',
		price: '$10.00',
		demo: 'https://demo.fivem.design?demo=store',
		template: StorePNG,
		trial: true,
		previewImgs: [
			{
				src: StoreLandingIMG,
			},
			{
				src: StoreProductsIMG,
			},
		],
	},
	{
		name: 'Link Tree',
		price: 'FREE',
		template: 'https://i.imgur.com/iAuXP2x.png',
		demo: 'https://demo.fivem.design?demo=linktree',
	},
];

export default Templates;
