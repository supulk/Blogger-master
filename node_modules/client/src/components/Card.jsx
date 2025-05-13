import './card.css'
function Card({author = '', date='', title = '',  content=''}){
    return(
        <article className="card">
            <div className="card-header">
                <span className="card-author">{author}</span>
                <span className="card-date">{date}</span>
            </div>
            <h2 className="card-title">{title}</h2>
            <div className="card-body">
                <p className="card-content">{content}</p>
            </div>
        </article>
    )
}
export default Card