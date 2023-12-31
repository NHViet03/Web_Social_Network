import React, { useState, useEffect , useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../../redux/actions/globalTypes";

import Avatar from "../Avatar";

const CallModal = () => {
  const { call, auth, socket, peer } = useSelector((state) => state);
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)
  const [second, setSecond] = useState(0)
  const [total, setTotal] = useState(0)
  const [answer, setAnswer] = useState(false)
  const youVideo = useRef()
  const otherVideo = useRef()
  const [tracks, setTracks] = useState(null)
  const dispatch = useDispatch();

  // Set Time
  useEffect(() => {
    const setTime = () => {
      setTotal((prev) => prev + 1)
      setTimeout(setTime, 1000)
    }
    setTime()
    return () => setTotal(0)
  }, [])

  useEffect(() => {
    setSecond(total%60)
    setMins(parseInt(total/60))
    setHours(parseInt(total/3600))

  }, [total])

  useEffect(() => { 
      if(answer)
   {
    setTotal(0)
   }else{
    const timer = setTimeout(() => {
      dispatch({type: GLOBAL_TYPES.CALL, payload: null})
    }, 15000);
    return () => clearTimeout(timer)
   }
  }, [answer, dispatch])

  
  // Stream Media
  const openStream = (video) =>{
    const config = {audio: true, video}
    return navigator.mediaDevices.getUserMedia(config)
  }
  
  const handleAnswer = () => {
    openStream(call.video).then(stream => {
      playStream(youVideo.current, stream)
      const track = stream.getTracks()
      setTracks(track)

      const newCall = peer.call(call.peerId, stream);
      newCall.on('stream', (remoteStream) => {
        playStream(otherVideo.current, remoteStream)
      })

      setAnswer(true)
    })
  }

  const playStream = (tag, stream) =>{
    let video = tag
    video.srcObject = stream
    video.pause()
    video.load()
    video.oncanplaythrough = () => {
      if (video.readyState >= 2) {
        video.play()
      }
    }
  } 

  useEffect(() => {
    peer?.on('call', newCall => {
      openStream(call?.video).then(stream => {
        if(youVideo.current){
          youVideo.current.pause();
          playStream(youVideo.current, stream)
        }
        const track = stream.getTracks()
        setTracks(track)

        newCall.answer(stream);

        newCall?.on('stream', (remoteStream) => {
          if(otherVideo.current){
            otherVideo.current.pause();
            playStream(otherVideo.current, remoteStream)
          }
        });
        setAnswer(true)
      })
    })
    return () => peer?.removeListener('call');
}, [peer, call?.video]);



  // End Call
  const handeEndCall = () => {
      dispatch({ type: GLOBAL_TYPES.CALL , payload: null});
      socket.emit('endCall', call)
    }
    useEffect(() => {
      if (socket && typeof socket.on === 'function') {
        socket.on('endCallToClient', data => {
          dispatch({ type: GLOBAL_TYPES.CALL, payload: null });
        });
        return () => socket.off('endCallToClient');
      }
    }, [socket, dispatch]);
    
  return (
    <>
      {call === null ? (
        <></>
      ) : (
        <div className="call_modal">
          <div className="call_box"   style={{opacity: (answer && call.video) ? '0' : '1'}}>
           <div className="text-center call_modal_name">
             <div className="call_modal_avatar"> <Avatar src={call?.avatar} size="avatar-lg" /></div>
              <h4 className="">{call?.username}</h4>
              <h6>{call?.fullname}</h6>
                {
                  answer 
                  ? 
                  <div>
                      <small>{hours.toString().length < 2 ? '0' +hours : hours}</small>
                      <small>:</small>
                      <small>{mins.toString().length < 2 ? '0' +mins : mins}</small>
                      <small>:</small>
                      <small>{second.toString().length < 2 ? '0' +second : second}</small>
                  </div>
                  : <div>
                      {call?.video ? (
                        <span>Đang gọi video...</span>
                      ) : (
                        <span>Đang gọi điện thoại</span>
                      )}
              </div>
                }
             
           </div>
                {
                  !answer &&
                  <div className="timer">
                    <small>{mins.toString().length < 2 ? '0' +mins : mins}</small>
                    <small>:</small>
                    <small>{second.toString().length < 2 ? '0' +second : second}</small>
                 </div>
                }
           
          <div className="call_menu">
          
                <span className="material-icons text-danger" onClick={handeEndCall}>call_end</span>
                {
                  (call.recipient === auth.user._id && !answer) &&
                  <>
                  {
                    call.video ?
                    <span className="material-icons text-success" onClick={handleAnswer}>
                      videocam
                    </span>
                    :
                    <span className="material-icons text-success" onClick={handleAnswer}>
                      call
                    </span>
                  }
                </>
                }
               
          </div>
             
          </div>
          <div className="show_video"
              style={{display: (answer && call.video) ? 'block' : 'none'}}
              >
                  <video ref={youVideo} className="you_video" />
                  <video ref={otherVideo} className="other_video" />

                  <div className="time_video">
                      <small>{hours.toString().length < 2 ? '0' +hours : hours}</small>
                      <small>:</small>
                      <small>{mins.toString().length < 2 ? '0' +mins : mins}</small>
                      <small>:</small>
                      <small>{second.toString().length < 2 ? '0' +second : second}</small>
                  </div>

                  <span className="material-icons text-danger end_call" onClick={handeEndCall}>call_end</span>

              </div>
        </div>
        
      )}
    </>
  );
};

export default CallModal;
