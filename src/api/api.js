const redditFetch = async () => {
    const url = 'https://www.reddit.com/r/AskReddit.json';
    const response = await fetch(url);
    console.log(response);
    const json = await response.json();
    console.log(json);
    console.log(json.data);
    console.log(json.data.children);
  }

  const redditFetchComments = async () => {
    const url = 'https://www.reddit.com/r/AskReddit/comments/1jb2jea/what_historical_fact_did_you_learn_in_school_that/.json'; //permalink
    const response = await fetch(url);
    console.log(response);
    const json = await response.json();
    console.log(json);
    //console.log(json.data);
    console.log(json[1].data.children[2].data.body);
  }

  // /r/AskReddit/comments/1jb2jea/what_historical_fact_did_you_learn_in_school_that/
  /*
  const handleClick = () => {
    redditFetch();
    redditFetchComments();
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>REDDIT</button>
      </header>
    </div>
  );
}
  */

/*
  const redditFetchPosts = async () => {
    const url = 'https://www.reddit.com/r/AskReddit.json';
    const response = await fetch(url);
    //console.log(response);
    const json = await response.json();
    const postsMap = json.data.children.map((post) => [post.data.author, post.data.permalink, post.data.score, post.data.subreddit, post.data.title, post.data.url, post.data.created, post.data.num_comments]);
    console.log(postsMap);
    //console.log(json);
    //console.log(json.data);
    //console.log(json.data.children);
  }

  const redditFetchSubreddits = async () => {
    const url = 'https://www.reddit.com/subreddits.json';
    const response = await fetch(url);
    //console.log(response);
    const json = await response.json();
    const subredditsMap = json.data.children.map((post) => [post.data.banner_background_color, post.data.banner_background_image, post.data.banner_image, post.data.description, post.data.display_name_prefixed, post.data.title, post.data.url, post.data.created, post.data.subreddit_type, post.data.community_icon, post.data.subscribers]);
    console.log(subredditsMap);
    //console.log(json);
    //console.log(json.data);
    //console.log(json.data.children);
  }

  const redditFetchComments = async () => {
    const url = 'https://www.reddit.com/r/AskReddit/comments/1jb2jea/what_historical_fact_did_you_learn_in_school_that/.json';
    const response = await fetch(url);
    //console.log(response);
    const json = await response.json();
    const commentMap = json[1].data.children.map((comment) => comment.data.body);
    console.log(commentMap);
    //console.log(json);
    //console.log(json.data);
    //console.log(json[1].data.children[2].data.body);
  }

  // /r/AskReddit/comments/1jb2jea/what_historical_fact_did_you_learn_in_school_that/

  const handleClick = () => {
    //redditFetchPosts();
    redditFetchSubreddits();
    //redditFetchComments();
  };
*/