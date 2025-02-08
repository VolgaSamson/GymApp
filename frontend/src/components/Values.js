
import Image from '../images/values.jpg'
import SectionHead from './SectionHead';
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data';
import Card from '../UI/Card'
const Values=() =>{
    return(
<section className='values'>
    <div className='container values__container'>
        <div className='values__left'>
            <div className='values__image'>
                <img src={Image} alt="Values Image"></img>
            </div>
            </div>
            <div className='values__right'>
                <SectionHead icon={<GiCutDiamond/>} title="values" />
                    <p>
                    Our gym is built on values of commitment, empowerment, and inclusivity. 
                    We strive to create a supportive environment where everyone, no matter their 
                    fitness level, can grow, challenge themselves, and reach their goals. With a 
                    focus on both physical and mental strength, we’re dedicated to helping you achieve
                    lasting transformation and find a sense of community.
                    </p>
                    <div className='values__wrapper'>
                        {
                            values.map(({id,icon,title,desc})=>{
                                return <Card key={id} className="values__value">
<span>{icon}</span>
<h4>{title}</h4>
<small>{desc}</small>
                                </Card>

                            })
                        }
                    </div>
                
            </div>
        </div>
    

</section>
    )
}
export default Values;