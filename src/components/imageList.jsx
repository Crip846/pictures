import ImageShow from './ImageShow'

function ImageList({images}){
    console.log (images)
    const renderImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })

    return(
        <div>
         {renderImages}
        </div>
   
    )
    }
    export default ImageList

