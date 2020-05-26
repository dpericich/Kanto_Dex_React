import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'
  
function App() {
  const [name, setName] = useState([])
  const [sprite, setSprite] = useState([])
  const [links, setLink] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel= c) 
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setName(res.data.results.map(p => p.name))
      setLink(res.data.results.map(p => p.url))
    })
    console.log(links)

    links.map(link => (axios.get(link).then(res => {
      setSprite(res.data.sprites.front_shiny)
    })))

    console.log(sprite)


    return() => cancel()

  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <div>
      <div className="Header">
        Kanto Dex
      </div>
      <div className="Main">
        <PokemonList name={name}/>
        <div className="Pagination">
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </div>
      </div>
      <div className="Footer"></div>
    </div>
  );
}

export default App;
