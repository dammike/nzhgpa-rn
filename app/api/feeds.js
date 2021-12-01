import client from './client';

const endpoint = '/feeds';
const getFeeds = () => client.get(endpoint);
const getFeedsBy = query => client.get(`${endpoint}/search?sortBy=${query}`);

export default {
    getFeeds,
    getFeedsBy
}