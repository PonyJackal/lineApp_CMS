
import axios from 'axios';

const makeAPI = () => {
    const token = localStorage.getItem('token');

    const API = axios.create({
        // baseURL: 'http://161.35.118.222/',
        baseURL: 'http://beta3-lineapp.simplyintense.com/api/v1',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': token ? `${token}` : '',
            // 'Access-Control-Allow-Headers': 'origin, content-type',
            // 'Access-Control-Allow-Credentials': true
            'Origin': '*'

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

export const getUsers = () =>
    makeAPI().get('users')

export const getDashboard = () =>
    makeAPI().get('api/dashboard')
