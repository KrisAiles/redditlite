const redditSearch = async (searchCallback, searchTerm) => {
    console.log(searchTerm);
    if (searchTerm) {
        const url = `https://www.reddit.com/search.json?q=${searchTerm}`;
        const response = await fetch(url);
        const json = await response.json();
        return searchCallback(json.data.children);
    } else {
        return searchCallback([]);
    }
};

export default redditSearch;