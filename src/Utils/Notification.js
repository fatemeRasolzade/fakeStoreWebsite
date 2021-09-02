import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { removeNotification } from '../redux/actions/userAction'
import { useDispatch } from 'react-redux'

const Notification = ({Users}) => {

    const {notification} = Users

    const dispatch = useDispatch()

    useEffect(() => {
        if(notification.open){
            setTimeout(() => {
                dispatch(removeNotification())
            }, 9000000000);
        }
    }, [notification.open])

    return (
        <>
        {notification.open &&
            <>
            <div>
                {notification.text}
            </div>
          
{/*             
            // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            //     <div class="modal-dialog">
            //         <div class="modal-content">
            //             <div class="modal-body">
            //                 {notification.text}
            //             </div>
            //         </div>
            //     </div>
            // </div> */}
            </>
        }
        </>
    )
}

const mapStateToProps = state=>({
    Users : state.Users
})

export default connect(mapStateToProps)(Notification)
