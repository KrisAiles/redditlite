const subreddits = async (subredditsCallback) => {
    const url = 'https://www.reddit.com/subreddits.json';
    const response = await fetch(url);
    const json = await response.json();
    return subredditsCallback(json.data.children);
  };

  export default subreddits;