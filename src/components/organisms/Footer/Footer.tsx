import { SocialIcons } from 'Molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="flex justify-between mt-8 md:mt-20 px-4 md:px-20 py-8">
			<span>&copy; {new Date().getFullYear()} Jacob Yi</span>
			<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://www.github.com/imyasha',
						icon: 'GITHUB',
					},
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jacob-yi-dev',
						icon: 'LINKEDIN',
					},
					// {
					// 	name: 'Twitter',
					// 	url: 'https://twitter.com/jakeherp',
					// 	icon: 'TWITTER',
					// },
					// {
					// 	name: 'Instagram',
					// 	url: 'https://www.instagram.com/jakeherp',
					// 	icon: 'INSTAGRAM',
					// },
				]}
			/>
		</footer>
	);
};

export { Footer };
