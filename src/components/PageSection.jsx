const PageSection = ({title,text,img, alt, btn}) => {
  return (
    <div className="page-section">
       <div className="container">
       {title && <div className="page-section-text">
        {title && <h3>{title}</h3>}
       {text &&  <p>{text}</p>}
        </div>}
       {img &&  <div className="page-section-img">
            <img src={img} alt={alt} />
        </div>}
        {btn && <button className="btn">{btn}</button>}
       </div>
    </div>
  )
}
export default PageSection