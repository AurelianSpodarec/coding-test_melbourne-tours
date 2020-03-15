import request from '../request/request';

const getMalibourneTours = async () => {
    const res = await request(`tour.json?location_ids=Melbourne&count=9`, 'GET')
    return res;
}

const getTour = async (tourID) => {
    const res = await request(`tour.json?id=${tourID}&fields=all`, 'GET')
    return res;
}

const getTopMalbourneTours = async () => {
    const res = await request(`tour.json?location_ids=Melbourne&count=3&order_by=-score`, 'GET')
    return res;
}

export {
    getMalibourneTours,
    getTour,
    getTopMalbourneTours
}