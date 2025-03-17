const subreddits = async (subredditsCallback) => {
    const url = 'https://www.reddit.com/subreddits.json';
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    console.log(json.data);
    console.log(json.data.children);
    return subredditsCallback(json.data.children);
  };

  export default subreddits;