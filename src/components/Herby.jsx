import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Herby() {
  const navigate=useNavigate()
  
  useEffect(()=>{
    function exit(e){
      if(!e.target.className.includes('chat')){
        navigate('/')
      }
    }
    const container=document.querySelector('.container')
    container.addEventListener('click',exit)
    
    return () => {
      document.removeEventListener('click',exit);
    };
  },[navigate])
  
  return (
    <div className="container h-dvh flex justify-center items-center">
      <iframe
        className="chat sm:rounded shadow-lg h-full sm:h-[500px]"
        allow="microphone;"
        width="400"
        src="https://console.dialogflow.com/api-client/demo/embedded/0bb6ab00-08c3-4b83-a11e-9bf552797576"
      ></iframe>
    </div>
  );
}

export default Herby;