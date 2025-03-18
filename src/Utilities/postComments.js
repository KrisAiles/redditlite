const postComments = async (commentsCallback, permalink) => {
    if (permalink) {
        const url = `https://www.reddit.com${permalink}.json`;
        const response = await fetch(url);
        const json = await response.json();
        return commentsCallback(json);
    } else {
        return commentsCallback([]);
    }
  };

  export default postComments;