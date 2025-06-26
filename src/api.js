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

export const postComment = (articleId, user, text) => {
  if(text === ''){
    return Promise.reject({
        msg: 'Comment must have a text body'
      })
  }
  const body = JSON.stringify({
    username: user,
    body: text
  })
  return fetch(`${baseUrl}/articles/${articleId}/comments`, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    if(!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: 'failed to post comment'
      })
    }
    return res.json()
  })
}