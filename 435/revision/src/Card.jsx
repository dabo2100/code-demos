import React from 'react'

export default function Card({ color, content }) {
    return (
        <div className={"col-12 " + color}>{content}</div>
    )
}
