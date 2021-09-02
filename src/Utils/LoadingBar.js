import React from 'react'

const LoadingBar = () => {
    return (
        <div>
            <div class="text-center my-5">
                <div class="spinner-grow text mx-3" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-grow text mx-3" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-grow text mx-3" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        </div>
    )
}

export default LoadingBar
