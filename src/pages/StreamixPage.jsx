import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import StreamixItem from '../components/StreamixItem';

export default function StreamixPage() {
  const [list,setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
 
  const nav = useNavigate();
  const [query] = useSearchParams();

  const onSub = (e) => {
    e.preventDefault(); //
    const input_val = inputRef.current.value;
    console.log(input_val);
 
    nav("/?s="+input_val)

  }

  useEffect(() => {
    console.log("useEffect triggered. Current query:", query.toString());
    doApi();
  },[query])

  const doApi = async() => {
    const queryS = query.get("s") || "Monkeys";
    if (!queryS){
      setList([]);
      return;
    }
    console.log("doApi called. queryS:", queryS);
     
    const url = `https://www.omdbapi.com/?apikey=5a292f28&s=${queryS}`;
    console.log("Searching for:", queryS);
   
  
    try {
             setLoading(true);
            const { data } = await axios.get(url);
            console.log("API response data:", data);

            if (data.Response === "True") {
                setList(data.Search);
                console.log("Updated list with:", data.Search);
            } else {
                setList([]);
                console.log("List cleared (no results).");
            }
             setLoading(false);
        } catch (error) {
            console.log(error);
             setLoading(false);
        }
  }
  return (
    <div className='container'>
      <form onSubmit={onSub} className='col-md-4 mt-3'>
        <div className='d-flex'>
          <input ref={inputRef} type="search" className='form-control' placeholder='Search for movies...' />
          <button className='btn btn-purp'>Search</button>
        </div>
      </form>
      <div>
        <div className='row'>
          {list.map(item => {
            return (
             <StreamixItem key={item.imdbID} item={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

