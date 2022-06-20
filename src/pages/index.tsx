import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

const IndexPage = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Redux',
		'Jamstack',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
		'Gatsby',
		'Svelte',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Senior Software Engineer – Jacob Yi"
				description={`A Full Stack Engineer with a focus on JavaScript and React. I have more than ${
					new Date().getFullYear() - 2016
				} years experience working in software engineering and consulting.`}
				keywords={[
					'Software Engineer',
					'Jacob Yi',
					'Software Consulting',
					'Front-End',
					'Full-Stack',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
					'CSS',
					'Tailwind',
				]}
			/>
			<Container>
				<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
					Hey, I&apos;m Jacob Yi 👋
				</h1>
				<p className="my-8 text-lg">
					I am a passionate Full Stack Engineer, specialised in front-end
					development using React and TypeScript. As an advocate for web
					performance and accessibility and an evangelist for the Jamstack, I
					create amazing web applications to make the internet a better place.
					You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
			</Container>
		</AnimatePage>
	);
};

export default IndexPage;
