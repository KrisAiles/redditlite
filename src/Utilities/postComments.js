const postComments = async (commentsCallback, permalink) => {
    if (permalink) {
        const url = `https://www.reddit.com${permalink}.json`; //permalink
        const response = await fetch(url);
        console.log(response);
        const json = await response.json();
        console.log(json);
        console.log(json.data);
        console.log(json[1].data.children[2].data.body);
        console.log(json[1].data.children[2].data.replies.data.children[1].data.body);
        return commentsCallback(json);
    } else {
        return commentsCallback([]);
    }
  };

  export default postComments;