function Modal(prop) {
	var title = prop.title;
	var content = prop.content;

	function cancelHandler() {
		prop.onCancel();
	}
	function confirmHandler() {
		prop.onConfirm();
	}

	return (
		<div className='modal'>
			<div className='modal-header'>
				<h2>{title}</h2>
			</div>
			<div className='modal-content'>{content}</div>
			<div className='modal-actions'>
				<button className='btn btn--alt' onClick={cancelHandler}>
					Cancel
				</button>
				<button className='btn' onClick={confirmHandler}>
					Continue
				</button>
			</div>
		</div>
	);
}

export default Modal;
