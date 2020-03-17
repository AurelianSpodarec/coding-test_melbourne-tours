import request from '../request/request';

const getMalibourneTours = async (filter) => {
    console.log("Get maliborune tour", filter)

    let query = "tour.json?count=9&annotate=converted_price:AUD&";

    const buildSubQuery = function (key, value) {
        console.log("Subquery", key, value)
        if (value == '' || value == []) {
            return '';
        }
        return `${key}=${value}&`
    }

    const buildQuery = () => {
        if (!filter) return 'Melbourne';
        for (let [key, value] of Object.entries(filter)) {
            // query += 'location_ids=Melbourne&'
            query += buildSubQuery(key, value)
            console.log(query)
        }
    }
    buildQuery()

    console.log("LINK", `${query}`)
    const res = await request(`${query}`, 'GET')
    return res;
}

const getTours = async (location) => {
    const res = await request(`tour.json?location_ids=${location}`, 'GET')
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

// const getTours = async (data) => {

//     let query = 'cars?';

//     const buildSubQuery = function (key, value) {

//     }

//     const buildQuery = () => {
//         if (!data) return 'cars';

//         for (let [key, value] of Object.entries(data)) {
//             query += buildSubQuery(key, value)
//         }
//     }

//     buildQuery()

//     const res = await request(query, "GET");
//     return await res;
// }

export {
    getMalibourneTours,
    getTours,
    getTour,
    getTopMalbourneTours
}