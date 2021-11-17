import client from './client';

const endpoint = '/pilots';
const getPilots = () => client.get(endpoint);

export default {
    getPilots
}