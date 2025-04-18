import { useCallback, useRef, useState } from 'react'
import SuggestList from './suggestion'
import Input from './Input'
import { Search } from 'lucide-react'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'

function SearchProduct() {
  const navigate = useNavigate()
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
    navigate('/product')
  }
  
  return (
    <div>
      <Search className='cursor-pointer absolute top-[18px] ml-[198px]'/>
      <Input className='py-[0.5px] font-nunito bg-inherit px-2 text-lg font-normal outline-none rounded-md border-2 border-black' value={inputVal} type="text" ref={ref} onChange={handleChange} placeholder='Search here...'
      />
      {suggestions.length>0 && (
        <ul className='absolute font-normal text-base'>
          {suggestions.map((item,id)=>(
            <li 
              className={`hover:text-emerald-600 font-nunito text-sm text-gray-600 px-2 py-[0.7px] cursor-pointer bg-white`}
              onClick={()=>handleSelect(item)}
              key={id}
            >{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchProduct