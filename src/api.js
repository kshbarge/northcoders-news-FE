const baseUrl = 'https://nc-news-jmk7.onrender.com/api';

export const getContent = (urlLocation) => {
    return fetch(`${baseUrl}/${urlLocation}`)
    .then((res) => {
        if (!res.ok) {
            return Promise.reject({ status: res.status, msg: 'failed to fetch data'})
        }
        return res.json();
    })
}

export const patchVotes = (articleId, amount) => {
  const body = JSON.stringify({inc_votes: amount})
  return fetch(`${baseUrl}/articles/${articleId}`, {
    method: 'PATCH',
    body,
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    if(!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: 'failed to update article'
      })
    }
    return res.json()
  })
}