const urlPath = process.env.NODE_ENV === 'development' ? 'http://localhost:10000/' : 'have no production url';

export const sleep = data => {
    return new Promise(res => setTimeout(() => {
            console.log('sleep done');
            res(data);
        }, 2000));
};

export const fetchPostRequest = (url, data) => {
    const paramsObject = {
        method: 'post',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const resultUrl = urlPath + url;

    return fetch(resultUrl, paramsObject);
};

export const fetchGetRequest = url => {
    const resultUrl = urlPath + url;

    return fetch(resultUrl);
};
