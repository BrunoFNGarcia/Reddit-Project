import { useEffect, useState } from 'react';
import './App.css';
import { ReactComponent as RedditLogo } from './Assets/RedditLogo.svg';
import SearchBar from './SearchBar/SearchBar';
import Feed from './Feed/Feed';
import SubredditsSection from './SubredditsSection/SubredditsSection';


function App() {

  const [feed, setFeed] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState('');

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
  }, [])

  // useEffect(() => {
  //   fetch('https://www.reddit.com/hot.json')
  //     .then(response => response.json())
  //     .then(json => setSubreddits(json.data.children))
  // }, []);

  const handleClick = (value) => {
    setSelectedSubreddit(value);
  };

  return (
    <div className="App">
      <div className='Header'>
        <div className='HeaderMain'>
          <RedditLogo className='HeaderMainLogo'/>
          <h1 className='HeaderMainTitle'><span className='redditTitle'>reddit</span>project</h1>
        </div>
        <div className='HeaderSearchBar'>
          <SearchBar/>
        </div>
      </div>
      <div className='Main'>
        <Feed
          feed={feed}
        />
        <SubredditsSection
          subreddits={subreddits}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
