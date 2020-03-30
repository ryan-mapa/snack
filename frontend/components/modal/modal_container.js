import {connect} from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/ui_actions';

const msp = (state) => ({
    modalType: state.ui.modal,
    modalData: state.ui.modalData
})

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

const modalContainer = connect(msp, mdp)(Modal);

export default modalContainer;