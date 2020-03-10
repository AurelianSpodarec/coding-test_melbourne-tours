import { RequestError } from './RequestError';
import getResponseContent from './getResponseContent';

import config from './config';

const request = async function (endpoint, method, data) {
    const response = await fetch(`${config.API_URL}/${config.API_VERSION}/${endpoint}`, {
        method,
        // credentials: 'include',
        headers: {
            // "Content-Type": "application/json",
            "X-Triposo-Account": `${config.API_ACCOUNT_ID}`,
            "X-Triposo-Token": `${config.API_TOKEN}`
        },
        body: JSON.stringify(data)
    })

    const content = await getResponseContent(response)

    if (response.ok) {
        return content
    }

    throw new RequestError(response.statusText, response.status, content)
}

export default request;