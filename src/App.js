import { useEffect, useState } from 'react';
import './App.css';
import { ReactComponent as RedditLogo } from './Assets/RedditLogo.svg';
import SearchBar from './SearchBar/SearchBar';
import Feed from './Feed/Feed';
import SubredditsSection from './SubredditsSection/SubredditsSection';
import SearchResults from './SearchResults/SearchResults';
// import InfiniteScroll from './InfiniteScroll';


function App() {

  const [feed, setFeed] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [text, setText] = useState('');
  // const [isFetching, setIsFetching] = InfiniteScroll(fetchMoreItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedSubreddit === '') {
          const response = await fetch('https://api.reddit.com/.json?feed=home');
          const json = await response.json();
          setFeed(json.data.children);
        } else {
          const response = await fetch(`https://api.reddit.com/r/${selectedSubreddit}/.json`);
          const json = await response.json();
          setFeed(json.data.children);
        };
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedSubreddit]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.reddit.com/hot.json');
        const json = await response.json();
        setSubreddits(json.data.children);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // function fetchMoreItems() {
  //   const fetchData = fetch(`'https://api.reddit.com/.json?feed=home&after=${feed.data.after}'`)

  //   }
  //   setTimeout(() => {
  //     setFeed(prevState => ([...prevState, ]));
  //     setIsFetching(false);
  //   }, 2000);
  // }

  const handleClick = (value) => {
    setSelectedSubreddit(value);
    setText('');
    setSearchResults([]);
  };

  const handleTextChange = e => {
    setText(e.target.value);
    e.target.value !== '' ? search(e.target.value) : search([]);
  };

  const search = async (value) => {
    try {
      const fetchData = await fetch(`https://api.reddit.com/search.json?q=${value}`)
      const response = await fetchData.json();
      const json = await response.data.children;
      setSearchResults(json);
    } catch(error) {
      console.error('Error fetching data:', error);
    }
  };

  // const search = value => {
  //   fetch(`https://api.reddit.com/search.json?q=${value}`)
  //   .then(response => response.json())
  //   .then(json => setSearchResults(json.data.children))
  // }

  return (
    <div className="App">
      <div className='Header'>
        <div className='HeaderMain'>
          <RedditLogo className='HeaderMainLogo'/>
          <h1 className='HeaderMainTitle'><span className='redditTitle'>reddit</span>project</h1>
        </div>
        <div className='HeaderSearchBar'>
          <SearchBar
            onChange={handleTextChange}
            searchResults={searchResults}
            value={text}
          />
          <SearchResults
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className='Main'>
        <SubredditsSection
          subreddits={subreddits}
          selectedSubreddit={selectedSubreddit}
          onClick={handleClick}
        />
        <Feed
          feed={feed}
        />
      </div>
      {/* {isFetching && 'Fetching more items...'} */}
    </div>
  );
}

export default App;
