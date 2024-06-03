import React,{useState,useEffect} from 'react'
import '../Style/Home.css'
import notAvImage from '../img/Image_not_available.png'
import {API_KEY} from './Constants/Constants'
import {baseUrl} from './Constants/Constants'
import axios from 'axios'
import '../Style/Logo.css'
import fasalLogo from '../img/fasalLogo.jpeg'

function Home(){
  useEffect(()=>{
    axios.get(`${baseUrl}?apikey=${API_KEY}&s='movie'`).then((response)=>{
      if(response.data.Search){
        setMovieList(response.data.Search)
      }
    })
    axios.get(`${baseUrl}/?apikey=${API_KEY}&s='series'`).then((response)=>{
      if(response.data.Search){
        setSeriesList(response.data.Search)
      }
    })
  }, [])

  const [movieList,setMovieList]=useState([])
  const [seriesList,setSeriesList]=useState([])
  const [count,setCount]=useState(0)
  const [playlistArr,setPlaylistArr]=useState([])
  const [movies,setMovies]=useState([])
  const [text,setText]=useState('')
  const [state,setState]=useState(false)

  const FunPlaylist=(id,title,poster)=>{
    const isAlreadyAdded=playlistArr.some((obj)=>obj.id===id)
    if(!isAlreadyAdded){
      setCount(count+1)
      setPlaylistArr([...playlistArr,{id,title,poster,click:true}])
    }
  }

  const display=()=>{
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`).then((response)=>{
      if(response.data.Response==='True'){
        setMovies(response.data.Search)
      }
      else{
        alert('No movie found')
      }
    })
  }

  return (
    <div>
      <div className="logoContainer">
        <img src={fasalLogo} className="logo" alt="logo"/>
        <h4><b>WELCOME</b>  Find, Watch & Enjoy!</h4>
      </div>

      <div className="head">
        <input type="text" placeholder="Search Movies,Series...🔎" className="searchBar" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className="searchBtn" onClick={display}>Search</button>
        <div className="viewBtn">
          <button className="headBtn" onClick={()=>setState(!state)}>{state?'Hide Playlist':`View Playlist(${count})`}</button>
        </div>
      </div>
      <div className="fade"></div>


      <div className="scroll">
      
        {state&&(
          <div>
            <h1>Playlist</h1>
            <div className="row">
              {playlistArr.map((obj)=>(
                <div key={obj.id} className="posters">
                  <img src={obj.poster!=='N/A'?obj.poster:notAvImage} alt={obj.title} className="moviePoster"/>
                  <div>
                    <h3>{obj.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="fade"></div>
          </div>
        )}

        {movies.length>0&&<h1>Search Result :</h1>}
        <div className="row">
          {movies.map((obj)=>(
            <div key={obj.imdbID} className="posters">
              <img src={obj.Poster!=='N/A'?obj.Poster:notAvImage} alt={obj.Title} className="moviePoster"/>
              <div>
                <h3>{obj.Title}</h3>
              </div>
              <div className="btnContainer">
                <button className={`${playlistArr.some((item) => item.id === obj.imdbID) ? 'added' : 'button'}`} onClick={()=>{
                    FunPlaylist(obj.imdbID,obj.Title,obj.Poster)}}>
                  {playlistArr.some((item)=>item.id===obj.imdbID)?'Added  ✔️':'Add to playlist➕'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <h1>Movies</h1>
        <div className="row">
          {movieList.map((obj)=>(
            <div key={obj.imdbID} className="posters">
              <img src={obj.Poster!=='N/A'?obj.Poster:notAvImage} alt={obj.Title} className="moviePoster"/>
              <div>
                <h3>{obj.Title}</h3>
              </div>
              <div className="btnContainer">
                <button className={`${playlistArr.some((item)=>item.id===obj.imdbID)?'added':'button'}`} onClick={()=>{
                    FunPlaylist(obj.imdbID,obj.Title,obj.Poster)}}>
                  {playlistArr.some((item)=>item.id===obj.imdbID)?'Added  ✔️':'Add to playlist➕'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="fade"></div>
        <h1>Series</h1>
        <div className="row">
          {seriesList.map((obj)=>(
            <div key={obj.imdbID} className="posters">
              <img src={obj.Poster!=='N/A'?obj.Poster:notAvImage} alt={obj.Title} className="moviePoster"/>
              <div>
                <h3>{obj.Title}</h3>
              </div>
              <div className="btnContainer">
                <button className={`${playlistArr.some((item)=>item.id===obj.imdbID)?'added':'button'}`} onClick={()=>FunPlaylist(obj.imdbID,obj.Title,obj.Poster)}>
                {playlistArr.some((item)=>item.id===obj.imdbID)?'Added  ✔️':'Add to playlist➕'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
