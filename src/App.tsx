import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import Hit from './Hit/Hit';

function App() {

  const searchClient = algoliasearch('3OPDS7TYYC','bd07bddcaad5b5b95e9f000bdbcba2af')

  const testClick = () => {
    console.log('aiueo')
  }
  // const Hit = ({hit}: any) => <div className='box' onClick={() => testClick()}>
  //   <p>{hit.title}</p>
  //   </div>
  // console.log(Hit)
  return (
    <div className="App">
      <InstantSearch searchClient={searchClient} indexName="meme-test">
        <Configure
          hitsPerPage={4}
          // analytics={false}
          // enablePersonalization={false}
          // distinct
        />
        <SearchBox />
        <Hits hitComponent={Hit}/>
      </InstantSearch>
    </div>
  );
}

export default App;
