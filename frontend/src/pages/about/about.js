
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'
const About = () =>{
    return (
        <>
        <Header title="About Us" image={HeaderImage}>
            Fat2Fit is the best place for any person who wants to lose weight, burn calories, remove cellulite, get slim, build muscles, get fit, relief back pain, improve posture and so many more.
With our Professional Certified Physical Therapist, we can lead you whatever was your body goals.
We are here to Help you!
            </Header>
            <section className='about__story'>
                <div className='container about__story-container'>
                    <div className='about__section-image'>
                        <img src={StoryImage} alt="Our Story Image"/>
                    </div>
                </div>
                <div className='about__section-content'>
                    <h1>Our Story</h1>
                    <p>In 2000 we have started our fitness journey</p>
                    <p>The thought process that inspired the launch of this fitness facility is to bring people together.</p>
                    <p>It addresses the need in society to have a place one can seek motivation and be reenergized.</p>
                    <p> Additionally, it will be a place to meet new friends and bring the community closer together.</p>
                </div>
                </section>
                <section className='about__Vision'>
                
                <div className='about__section-content'>
                    <h1>Our Vision</h1>
                    <p>With personal fitness profiles, both traditional and digital personal training options and diverse group exercise class offerings all delivered in a supportive, motivating environment</p>
                    <p>Fat2Fit has evolved so you can transform your life.</p>
                    <p>To make people happy!</p>
                </div>
                <div className='container about__vision-container'>
                    <div className='about__section-image'>
                        <img src={VisionImage} alt="Our Vision Image"/>
                    </div>
                </div>
                </section>

                <section className='about__mission'>
                <div className='container about__mission-container'>
                    <div className='about__section-image'>
                        <img src={MissionImage} alt="Our Mission Image"/>
                    </div>
                </div>
                <div className='about__section-content'>
                    <h1>Our Mission</h1>
                    <p> Fat2Fit's goal is to motivate women to reach their full potential.</p>
                    <p>To encourage them to fight past the daily hurdles of family, home and work responsibilities in order to reach levels of physical fitness they didn't believe possible.</p>
                    <p>  The ultimate goal being to teach clients that taking time for themselves will give them the energy and confidence to excel in all aspects of their lives.</p>
                </div>
                </section>
            
            </>
    )
}
export default About;