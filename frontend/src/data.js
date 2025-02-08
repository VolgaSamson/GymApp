import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Aerobic exercise",
        info: "Aerobic exercise, which speeds up your heart rate and breathing, is important for many body functions",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Strength training",
        info: "As we age, we lose muscle mass. Strength training builds it back.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Stretching",
        info: "Stretching helps maintain flexibility. We often overlook that in youth when our muscles are healthier.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Balance exercises",
        info: "Improving your balance makes you feel steadier on your feet and helps prevent falls.",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Achieving ultimate human performance"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Being compassionate to clients needs/wants"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Honesty and professionalism"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Helping everyone (staff and clients) achieve their goals"
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Generally, aim to exercise five days per week. Still, the number of days you work out may vary depending on your available time and fitness level. Try doing a mix of cardio and strength training exercises during the week. You can mix up the type of workouts you do across alternating days or on the same days."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Morning workouts are ideal for burning fat and losing weight, but afternoon workouts may give your performance a boost, since you'll have eaten a meal or two by the time you get going."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Try starting with short workouts that are 30 minutes or less. As you feel your strength building, add a couple more minutes every week. The American Heart Association recommends 75-150 minutes of aerobic activity, as well as two strength-training sessions, per week."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Although often overlooked, warmup exercises are an important part of any exercise routine. Your body needs some kind of activity to get your muscles warmed up before you launch into your workout. Warming up can help boost your flexibility and athletic performance, and also reduce your chance of injury."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "If your main goal is weight loss, you want to burn calories and build muscle mass. So, for optimal benefits, you should incorporate both cardio and strength training into your exercise routine."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Even exercising with light weights will help to build your muscular endurance, but, if it's physical strength you're looking for, the heavier the better. By adding compound lifts like squats and deadlifts to your regular workout routine, you'll increase your strength at an incredible rate."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Best training and trainers I have ever had in my life!.Super friendly atmosphere,Every session is different and fun.The trainers really push,motivate and helps us to exceed our limits and achieve our goals.Titan fitness is not just like any other fitness facility but like a family!.Highly recommended for all the fitness lovers irrespective of what level you are in.I am definitely coming back!!!",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Just finished 2 weeks at Fat2Fit! First impressions are hard to change but not only was the complex (yes they have a gym/yoga/assault course/outside crossfit area) amazing to top it off they have some serious trainers. I knew I was in for some serious workouts when Mitch (Head trainer) pushed me as hard as I’d been in 5 years on the first day.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Trained here for 2nd year in a row. The location is great, not on the main road like most other gyms in the area so you don’t get bothered by traffic. Surrounded by nature and mountain views makes for a pleasant training environment.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Wow, I really recommend this place for you if you want to have some fun while you do your workout! They have an amazing staff that are super serious and makes you reach your goals with a smile on their faces!! Thank you Titan Fitness, I will come back as soon as possible!!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]