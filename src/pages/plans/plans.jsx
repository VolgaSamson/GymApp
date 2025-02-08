import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './plans.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'

const Plans = () => {
  const navigate = useNavigate();

  const handleChoosePlan = (plan) => {
    // Navigate to the payment page and pass the selected plan data
    navigate('/payment', { state: { plan } });
  };

  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        We provide a wide range of plans which is affordable for people.
        Customers satisfaction is our priority.
      </Header>
      <section className='plans'>
        <div className='container plans__container'>
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>;
                })}
                <button className='btn-lg' onClick={() => handleChoosePlan({ id, name, price })}>
                  Choose Plan
                </button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
