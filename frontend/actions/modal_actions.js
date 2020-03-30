// non-sesssion related modal actions

export const OPENMODAL = 'OPENMODAL';
export const UPDATE_MODAL_DATA = 'UPDATE_MODAL_DATA';

export const openModal = (modalType) => ({
    type: OPENMODAL,
    modalType
})

export const updateModalData = (data) => ({
    type: UPDATE_MODAL_DATA,
    data
})

