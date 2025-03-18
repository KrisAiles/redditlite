const subredditsearch = async (searchCallback, subreddit) => {
    if (subreddit) {
        const url = `https://www.reddit.com/${subreddit}.json`;
        const response = await fetch(url);
        const json = await response.json();
        return searchCallback(json.data.children);
    } else {
        return searchCallback([]);
    }
};

export default subredditsearch;