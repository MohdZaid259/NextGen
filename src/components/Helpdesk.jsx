import { useNavigate } from 'react-router-dom'

function Helpdesk() {
  const navigate=useNavigate()

  const handleClick = () => {
    navigate('/herby')
  }
  return (
    <div className='fixed right-10 cursor-pointer bottom-10' onClick={handleClick}>
      <img className='w-16 lg:w-20 aspect-square' src="https://cdn.asksid.ai/himalaya/Care_icon.svg" alt="care" loading="lazy"></img>
    </div>
  )
}

export default Helpdesk