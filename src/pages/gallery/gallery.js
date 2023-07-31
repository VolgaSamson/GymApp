import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'
const Gallery = () =>{
    const Gallerylength = 15;
    const images = []
    for(let i=1;i<= Gallerylength; i++){
        images.push(require(`../../images/gallery${i}.jpg`))
    }
    return (
        <>
        <Header title="Our Gallery" image={HeaderImage}>
            A quick glance of our training sessions!
        </Header>
        <section className='gallery'>
            <div className='container gallery__container'>
                {
                    images.map((image, index) =>{
                        return <article key={index}>
                            <img src={image} alt={`Gallery Image ${index + 1}`} />
                        </article>
                    })
                }
            </div>
        </section>
        </>
    )
}
export default Gallery;