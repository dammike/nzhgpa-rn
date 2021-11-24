import client from './client';

const endpoint = '/feeds';
const getFeeds = () => client.get(endpoint);

export default {
    getFeeds
}