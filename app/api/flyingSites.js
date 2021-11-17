import client from './client';

const FLYING_SITES = '/flyingSites';
const REGIONS = '/regions';

const getFlyingSites = () => client.get(FLYING_SITES);
const getRegions = () => client.get(REGIONS);
const getFlyingSitesForRegion = (region) => client.get(`${FLYING_SITES}/${region}`);

export default {
    getFlyingSites,
    getRegions,
    getFlyingSitesForRegion
}