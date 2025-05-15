import './card.css'
function Card({author = '', date='', title = '',  content='', maxLength=400}){
    const truncatedContent = content.length > maxLength 
    ? `${content.substring(0, maxLength)}...` 
    : content;

    return(
        <div className="card">
            <div className="card-header">
                <span className="card-author">{author}</span>
                <span className="card-date">{date}</span>
            </div>
            <h2 className="card-title">{title}</h2>
            <div className="card-body">
                <p className="card-content">{truncatedContent}</p>
            </div>
        </div>
    )
}
export default Card