import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
const Contact = () =>{
    return (
        <>
        
        <section className='contact'>
            <div className='container contact__container'>
                <div className='contact__wrapper'>
                    <a href="mailto:volgasamson@gmail.com" target='_blank' rel="noreferrer"><MdEmail/></a>
                    <a href="http://m.me/ernest_achiever" target='_blank' rel="noreferrer"><BsMessenger/></a>
                    <a href="https://wa.me/+918281649063" target='_blank' rel="noreferrer"><IoLogoWhatsapp/></a>
                </div>
            </div>
        </section>
        </>
    )
}
export default Contact;