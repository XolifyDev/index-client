import { DevelopersContainer } from '../components/developers';
import { PageLayout } from '../layouts/page';

export const DevelopersPage = () => {
	return (
		<PageLayout container>
			<div style={{ paddingTop: '80px' }}>
				<DevelopersContainer full />
			</div>
		</PageLayout>
	);
};
