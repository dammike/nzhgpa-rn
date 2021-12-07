import client from './client';

const endpoint = "/airs";
const getAirs = () => client.get(endpoint);
const postAirs = (record) => client.post(endpoint, record);

export default {
    getAirs,
    postAirs
}