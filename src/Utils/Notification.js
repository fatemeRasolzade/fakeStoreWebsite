import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotification } from '../redux/actions/notificationAction';

const Notification = () => {

    const notification = useSelector(state => state.Notification.notification)

    const dispatch = useDispatch()

    useEffect(() => {
        let timer
        if(notification.open){
            timer = setTimeout(() => {
              handleCloseModal()
            }, 5000);
        }
        return ()=> {
          clearTimeout(timer)
        }
    }, [notification.open])

    const handleCloseModal = () => {
      dispatch(removeNotification())
    }

    return (
        <div className={(notification.open ? "showModal" : "" ) + " modal-parent"} onClick={handleCloseModal}>
          <div className="modal-child">
          <div className={(notification.open ? "setLoadbar" : "") + " loadbar"}></div>
                <div className="pt-4 pb-2">
                  <p>{notification.text}</p>
                  <button className="dark-btn">تایید</button>
                </div>
          </div>
        </div>
    )
}

export default Notification