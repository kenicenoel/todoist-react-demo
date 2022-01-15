function Backdrop(prop) {
	const onClick = prop.onClick;
	return <div className='backdrop' onClick={onClick}></div>;
}
export default Backdrop;
