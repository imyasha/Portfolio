import { IEducation, IJob } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import { mapEducation } from 'utils/mappings/mapEducation';
import { mapJobs } from 'utils/mappings/mapJobs';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Education } from 'Organisms/Education';
import { Icon } from 'Atoms/Icon';
import { SeoHead } from 'Atoms/SeoHead';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = ({ jobs, education }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="About Jacob Yi, a Senior Full Stack Engineer"
				description="As a passionate full Stack Engineer, I create amazing websites and web apps to make the internet a better place."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Jacob Yi
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Senior Full Stack Engineer
				</h2>
				<p className="mt-8">
					As a passionate Full Stack developer with background in Physics. Ever
					since I took a programming lab course, I have been hooked on
					programming and have been developing software applications. <br /> The
					courses I took in Physics have definitely taught me to be a critical
					thinker and a fast learner. I create amazing websites and web apps to
					make the internet a better place. I am an advocate for web performance
					and accessibility as well as a JAMstack enthusiast with experience in
					serverless technologies.
				</p>
				<p className="my-4">
					I am {new Date().getFullYear() - 1995} years old and have been a web
					developer for as long as I can think. The technologies I work with are
					JavaScript, HTML and CSS with a focus on the frameworks React.js,
					Gatsby, Next.js, Node and Express. I use code not only to do my
					day-to-day job, but also to solve everyday problems I come across.
				</p>
				<p>I enjoy cooking fresh food.</p>

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here are some of the most relevant
					certifications I have achieved:
				</p>

				<Education education={education} />

				<div className="flex justify-center mt-8">
					<Button
						href="/cv-2022.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query AboutPageQuery {
				jobs(orderBy: fromDate_DESC) {
					id
					jobTitle
					fromDate
					toDate
					description {
						raw
					}
					company {
						name
						url
						logo {
							url
						}
					}
					skills {
						skill
					}
				}
				educations(orderBy: date_DESC) {
					id
					course
					date
					courseContents {
						skill
					}
					institute {
						name
						url
						logo {
							url
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			education: mapEducation(data.educations),
			jobs: mapJobs(data.jobs),
		},
	};
}

export default AboutPage;
