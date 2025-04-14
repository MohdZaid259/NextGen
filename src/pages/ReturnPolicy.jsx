import {returnPolicy} from '../assets/returnPolicy.js'
import {X} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function ReturnPolicy() {
  const navigate = useNavigate()

  return (
    <div className="p-2 pt-20 sm:p-5 sm:pt-20">
    <span className="sm:text-center mb-3 block text-2xl font-bold">Return Policy</span>
    <X onClick={()=>navigate('/')} className='cursor-pointer absolute top-[90px] opacity-60 hover:opacity-100 right-10 h-4'/>
    <p>{returnPolicy}</p> 
  </div>
  )
}

export default ReturnPolicy;
