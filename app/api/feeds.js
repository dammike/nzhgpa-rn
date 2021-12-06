import client from './client';

const endpoint = '/feeds';
const getFeeds = () => client.get(endpoint);
const getFeedsBy = searchQuery => client.get(`${endpoint}/search?sortBy=${searchQuery}`);

export default {
    getFeeds,
    getFeedsBy
}