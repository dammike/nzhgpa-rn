import client from './client';

const endpoint = "/airs";
const getAirs = () => client.get(endpoint);

export default {
    getAirs
}