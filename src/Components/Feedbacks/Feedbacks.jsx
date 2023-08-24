import React from 'react'
import './feedbacks.css'
const Feedbacks = () => {
  return (
    <div className="feedbacksContainer">
        <div className="feedbacksContent">
            <div className="title">
                <h2>Our Customer Feedback</h2>
                <p>Don't take our word for it. Trus our costumers</p><br />
            </div>


            <div className="feedbacksCardContainer">
                <div className="feedbacksCard">
                    <div className="displayProfile">
                        <div className="foto">
                            <img src={require('../../Assets/foto1.png')} />
                        </div>
                        <div className="rating">
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                        </div>
                    </div>
                    <div className="displayName">
                        <h1>Floyd Miles</h1>
                    </div>
                    <div className="displayFeedbacks">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit! Ipsam sit odit impedit vero.</p>
                    </div>
                </div>
                <div className="feedbacksCard">
                    <div className="displayProfile">
                        <div className="foto">
                            <img src={require('../../Assets/foto2.png')} />
                        </div>
                        <div className="rating">
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                        </div>
                    </div>
                    <div className="displayName">
                        <h1>Ronald Richards</h1>
                    </div>
                    <div className="displayFeedbacks">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit! Ipsam sit odit impedit vero.</p>
                    </div>
                </div>
                <div className="feedbacksCard">
                    <div className="displayProfile">
                        <div className="foto">
                            <img src={require('../../Assets/foto3.png')} />
                        </div>
                        <div className="rating">
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                            <img src={require('../../Assets/star.png')} />
                        </div>
                    </div>
                    <div className="displayName">
                        <h1>Savanah Nguyen</h1>
                    </div>
                    <div className="displayFeedbacks">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit! Ipsam sit odit impedit vero.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedbacks