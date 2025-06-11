import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Herby() {
  const navigate=useNavigate()
  
  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    // const exit = (e) => {
    //   if(!e.target.className.includes('chat')){
    //     navigate("/");
    //   }
    // }
    // const container=document.querySelector('.container')
    // container.addEventListener('click',exit)

    return () => {
      document.body.removeChild(script);
      // document.removeEventListener('click',exit);
    };
  },[navigate])
  
  return (
    <div className="container h-dvh flex justify-center items-center">
        <df-messenger
          chat-icon="https://cdn.asksid.ai/himalaya/Care_icon.svg"
          intent="WELCOME"
          chat-title="Herby"
          agent-id="0bb6ab00-08c3-4b83-a11e-9bf552797576"
          language-code="en"
          className='chat sm:rounded shadow-lg h-full sm:h-[500px]'
        ></df-messenger>
=    </div>
  );
}

export default Herby;