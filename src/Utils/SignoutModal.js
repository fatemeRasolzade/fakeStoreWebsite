import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../redux/actions/userAction'

const SignoutModal = () => {

    const dispatch = useDispatch()

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style={{color: 'black'}}>
                    <div class="modal-header" style={{borderBottom: 'none'}}>
                        <h5 class="modal-title" id="exampleModalLabel" >خروج از حساب کاربری</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        آیا می خواهید از حساب کاربری خود خارج شوید؟
                    </div>
                    <div class="modal-footer" style={{borderTop: 'none'}}>
                        <button
                            type="button" class="btn btn-secondary px-4 mx-3"
                            data-bs-dismiss="modal">خیر</button>
                        <button
                            onClick={() => {
                                dispatch(signOut())
                            }}
                            data-bs-dismiss="modal"
                            type="button" class="btn px-4 mx-3"
                            style={{background: '#57466d',color: '#ffffff'}}>بلی
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignoutModal
