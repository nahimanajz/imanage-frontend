import {toast} from 'react-toastify';

const openModal = () => document.querySelector('.modal-bg').classList.add("open");
const closeModal = () => document.querySelector('.modal-bg').classList.remove("open");
const openPayModal = () => document.querySelector('.modal-sm').classList.toggle("active");

const message = (data, errors)=> {
    if (errors.length >0) {           
        errors.forEach(error => {
       return toast.warning(error[1]);            
        });   
    }else if(errors.length === 0) {
        toast.success(data.message);
    }   
}

export {openModal, closeModal, openPayModal, message};