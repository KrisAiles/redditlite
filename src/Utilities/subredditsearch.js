const subredditsearch = async (searchCallback, subreddit) => {
    if (subreddit) {
        const url = `https://www.reddit.com/${subreddit}.json`;
        const response = await fetch(url);
        console.log(response);
        const json = await response.json();
        console.log(json);
        console.log(json.data);
        console.log(json.data.children);
        return searchCallback(json.data.children);
    } else {
        return searchCallback([]);
    }
};

export default subredditsearch;