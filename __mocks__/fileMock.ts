const mock = 'test-file-stub';
export default mock;
export const ReactComponent = (props: any) => {
	// return a simple element for svg imports used in components
	const { alt = '', ...rest } = props || {};
	// @ts-ignore JSX
	return (<img alt={alt} {...rest} />);
};
