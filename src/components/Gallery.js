let Gallery = (props) => {
    return(
        <div className="gal_div">
            <img src={props.img_url} alt="images" />
            <p>{props.img_name}</p>
        </div>
    )
}
export default Gallery;