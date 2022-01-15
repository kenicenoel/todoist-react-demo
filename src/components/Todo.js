import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
	useState(false);
	const [showModal, setShowModal] = useState(false);
	var content = props.content;

	function deleteHandler() {
		setShowModal(true);
	}

	function hideModal() {
		setShowModal(false);
	}
	return (
		<div className='card'>
			<h3>{content}</h3>
			<div className='actions'>
				<button className='btn' onClick={deleteHandler}>
					Delete
				</button>
			</div>
			{showModal && (
				<Modal
					title='Are you sure?'
					onCancel={hideModal}
					onConfirm={hideModal}
					content='Do you want to delete this item?'
				/>
			)}
			{showModal && <Backdrop onClick={hideModal} />}
		</div>
	);
}

export default Todo;
