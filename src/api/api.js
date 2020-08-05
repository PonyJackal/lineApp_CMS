
import axios from 'axios';

const makeAPI = () => {
    const token = localStorage.getItem('token');

    const API = axios.create({
        // baseURL: 'http://161.35.118.222/',
        baseURL: 'http://localhost:3000/api/v1',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            'Authorization': token ? `${token}` : '',
        },
    })

    return API;
}

export const signin = ({ email, password }) =>
    makeAPI().post('login', { email, password });

export const getFaqs = () =>
    makeAPI().get('faqs')

export const createFaq = (faq) =>
    makeAPI().post('faqs', faq)

export const updateFaq = ({ id, faq }) =>
    makeAPI().patch(`faqs/${id}`, faq)

export const removeFaq = (id) =>
    makeAPI().delete(`faqs/${id}`)

export const importCustomers = (customers) =>
    makeAPI().post('api/importCustomer', customers)

export const addCustomer = (customer) =>
    makeAPI().post('api/addCustomer', customer)

export const getCustomers = ({ rowPerPage, page }) =>
    makeAPI().post(`api/getCustomers?page=${page}`, { rowPerPage });

export const addBroadcast = (broadcast) =>
    makeAPI().post('api/addBroadcast', broadcast)

export const publishBroadcast = ({ id }) =>
    makeAPI().post('api/publishBroadcast', { id })

export const archiveBroadcast = ({ id }) =>
    makeAPI().post('api/archiveBroadcast', { id })

export const getBroadcasts = ({ type, rowPerPage, page }) =>
    makeAPI().post(`api/getBroadcasts?page=${page}`, { type, rowPerPage });

export const getDashboard = () =>
    makeAPI().get('api/dashboard')

export const getChat = () =>
    makeAPI().get('api/getConversations')

export const getMessages = (id) =>
    makeAPI().get(`api/getMessages/${id}`)

export const sendMessage = ({ id, message }) =>
    makeAPI().post(`api/sendMessage/${id}`, { message })

export const unsubscribe = ({ id }) =>
    makeAPI().post(`api/unsubscribe/${id}`)

export const archive = ({ id }) =>
    makeAPI().post(`api/archive/${id}`)

export const markAsRead = ({ id }) =>
    makeAPI().post(`api/markAsRead/${id}`)