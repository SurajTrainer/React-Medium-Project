import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";

const CommentAPI = () => {
    const [comment, setComment] = useState([])

    const getApi = async () => {
        let response = await fetch('https://dummyjson.com/comments')
        let data = await response.json();
        setComment(data.comments);
    }
    useEffect(() => {
        getApi();
    }, [])
    return (
        <>
            <div className='mainContainer'>

                {
                    comment.map((comments) => {
                        return (

                            <div className="card mainCard">
                                <div className="card-body">
                                    <h5 className="card-title">{"id : " + comments.id}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{"postId : " + comments.postId}</h6>
                                    <h5 className="card-title">Comments <IoIosArrowRoundDown /></h5>
                                    <p className="card-text">{comments.body}</p>
                                    <button type="button" class="btn btn-outline-success m-2">{"user id: "+comments.user.id}</button> 
                                    <button type="button" class="btn btn-outline-danger">{comments.user.username}</button>
                                </div>
                            </div>

                        )
                    })
                }


            </div>
        </>
    )
}

export default CommentAPI
