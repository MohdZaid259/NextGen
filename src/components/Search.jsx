import {useCallback, useRef, useState} from 'react'
import SuggestList from './suggestion'
import Input from './Input'
import search from '../assets/icons/search.png'
import { debounce } from 'lodash'

function Search() {
  const [inputVal,setInputVal]=useState('')
  const [suggestions,setSuggestions]=useState([])
  const ref=useRef(null)

  const handleSearch = useCallback(
    debounce((value) => {
      if (value) {
        const result = SuggestList.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(result);
      } else {
        setSuggestions([]);
      }
      console.log('searching for:', value);
    }, 500),
    []
  );

  function handleChange(e){
    const value=e.target.value
    setInputVal(value)
    handleSearch(value)
  }

  function handleSelect(suggestion){
    setInputVal(suggestion)
    setSuggestions([])
  }
  
  return (
    <div>
      <img loading='lazy' className='w-5 cursor-pointer absolute top-[20px] ml-[198px]' src={search} alt="" />
      <Input className='py-[0.5px] font-nunito bg-inherit px-2 text-lg font-normal outline-none rounded-md border-2 border-black' value={inputVal} type="text" ref={ref} onChange={handleChange} placeholder='Search here...'
      />
      {suggestions.length>0 && (
        <ul className='absolute font-normal text-base border border-emerald-600 rounded'>
          {suggestions.map((item,id)=>(
            <li 
              className={`hover:text-emerald-600 font-nunito px-2 py-[0.7px] rounded cursor-pointer bg-white`}
              onClick={()=>handleSelect(item)}
              key={id}
            >{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search