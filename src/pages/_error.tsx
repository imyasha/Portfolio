import NextErrorComponent, { ErrorProps } from 'next/error';

import { NextPageContext } from 'next';

interface AppErrorProps extends ErrorProps {
	err?: Error;
	hasGetInitialPropsRun?: boolean;
}

const MyError = ({ statusCode, hasGetInitialPropsRun, err }: AppErrorProps) => {
	if (!hasGetInitialPropsRun && err) {
		// getInitialProps is not called in case of
		// https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
		// err via _app.js so it can be captured
		// Flushing is not required in this case as it only happens on the client
	}

	return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async (context: NextPageContext) => {
	const errorInitialProps: AppErrorProps =
		await NextErrorComponent.getInitialProps(context);

	const { res, err } = context;

	// Workaround for https://github.com/vercel/next.js/issues/8592, mark when
	// getInitialProps has run
	errorInitialProps.hasGetInitialPropsRun = true;

	// Returning early because we don't want to log 404 errors to Sentry.
	if (res?.statusCode === 404) {
		return errorInitialProps;
	}

	if (err) {
		// Flushing before returning is necessary if deploying to Vercel, see
		// https://vercel.com/docs/platform/limits#streaming-responses

		return errorInitialProps;
	}

	return errorInitialProps;
};

export default MyError;
