export default function Post({ content, likeNo, bg ,date}) {
    return (
        <div className={`col-12 rounded shadow border p-3 ${bg}`}>
            <h1>{content}</h1>
            <p>Likes : {likeNo}</p>
            <p>Date : {date}</p>
        </div>
    )
}