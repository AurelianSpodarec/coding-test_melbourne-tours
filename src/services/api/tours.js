import request from '../request/request';

const getMalibourneTours = async () => {
    const res = await request(`tour.json?location_ids=Melbourne`, 'GET')
    console.log("RES", res)
    return res;
}

export {
    getMalibourneTours
}