

export default function Post({ likesNo, content }) {
    return (
        <div className="col-12 bg-white shadow rounded-5">
            <h1>{content}</h1>
            <p>Likes : {likesNo}</p>
            <p>Comments : 12</p>
        </div>
    )
}
