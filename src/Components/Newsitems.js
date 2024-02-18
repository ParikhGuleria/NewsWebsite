import React from 'react'

export default function Newsitems(props) {
    return (
        <div className="my-3" style={{color: props.mode=== "dark"?"white":"#042743"}}>
            <div className="card" >
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
