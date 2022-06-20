import Image from 'next/image';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

const UsesPage: NextPage = () => {
	return (
		<AnimatePage>
			<SeoHead
				title="Jacob Yi uses ..."
				description="This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the US."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">Uses</h1>
				<p className="mt-4 mb-4 text-lg leading-7">
					This is a list of tech equipment I currently use for my day-to-day
					work as a software engineer. With the pandemic and a shift to working
					fully remotely, I have upgraded a lot of my equipment in 2020 and
					2021.
				</p>
				<Image
					layout="responsive"
					width={100}
					height={60}
					objectFit="cover"
					src="/assets/desk.jpg"
					alt="desk"
				/>
			</Container>
		</AnimatePage>
	);
};

// export async function getStaticProps() {
// 	return;
// }

export default UsesPage;
