import {termsConditions}  from "../assets/termsConditions";
import {X} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function TermsConditions() {
  const navigate = useNavigate()

  return (
    <div className="p-2 pt-20 sm:p-5 sm:pt-20">
    <span className="sm:text-center mb-3 block text-2xl font-bold">Terms & Conditions</span>
    <X onClick={()=>navigate('/')} className='cursor-pointer absolute top-[90px] opacity-60 hover:opacity-100 right-10 h-4'/>
    <p>{termsConditions}</p> 
  </div>
  )
}

export default TermsConditions;
