import { PageLayout } from '../layouts/page';
import { Templates } from '../components/templates';

export const TemplatesPage = () => {
	return (
		<PageLayout page='templates'>
			<div style={{ paddingBottom: '2px' }} />

			<Templates />
		</PageLayout>
	);
};
