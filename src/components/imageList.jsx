import ImageShow from './ImageShow'

function ImageList(){
    const renderImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    })
        <div>
         {renderImages}
        </div>
   
    
    }

    export default ImageList

