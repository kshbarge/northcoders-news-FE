const baseUrl = 'https://nc-news-jmk7.onrender.com/api';

export const getContent = () => {
    return fetch(`${baseUrl}/articles`)
    .then((res) => {
        if (!res.ok) {
            return Promise.reject({ status: res.status, msg: 'failed to fetch data'})
        }
        return res.json();
    })
}