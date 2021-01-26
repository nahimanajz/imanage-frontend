import {toast} from 'react-toastify';
import moment from 'moment';

const openModal = () => document.querySelector('.modal-bg').classList.add("open");
const closeModal = () => document.querySelector('.modal-bg').classList.remove("open");
const toggleSidebar = () => document.querySelector('.sidebar').classList.toggle('open');
const togglePayModal = () => document.querySelector('.modal-sm').classList.toggle("active");
const closePayModal =() => document.querySelector('.modal-sm').classList.remove("active");

const message = (data, errors)=> {
    if (errors.length >0) {           
        errors.forEach(error => {
       return toast.warning(error[1]);            
        });   
    }else if(errors.length === 0) {
        toast.success(data.message);
    }   
}
const formatDate =(date)=> moment(date).format("YYYY-MM-DD HH:mm:ss");
const payedAmount =(amount)=>  amount === 0 ? "No payment": amount;

export {openModal, closeModal, togglePayModal, message, formatDate, payedAmount, toggleSidebar, closePayModal};