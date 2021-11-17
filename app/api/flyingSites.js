import client from './client';

const endpoint = '/flyingSites';
const getFlyingSites = () => client.get(endpoint);

export default {
    getFlyingSites
}