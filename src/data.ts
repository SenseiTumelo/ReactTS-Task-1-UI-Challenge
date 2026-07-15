// Can Pictures
import colaImg from './assets/images/Olipop_Cola.png'
import gingerImg from './assets/images/Olipop_GingerLemon.png'
import orangImg from './assets/images/Olipop_Orange.png'
import rootbeerImg from './assets/images/Olipop_RootBeer.png'
import strawberryImg from './assets/images/Olipop_Strawberry.png'
import cherryImg from './assets/images/Olipop_Cherry.png'

// Social Media Icons
import insta from "./assets/icons/instagram.png"
import fb from "./assets/icons/facebook.png"
import twitter from "./assets/icons/twitter.png"
import linkedin from "./assets/icons/linkedin.png"
import pinterest from "./assets/icons/pinterest.png"


export const itemcarddata = 
    [
        {name:"Cola", price:"$34.99", imgSRC: colaImg, bgColor:"#E1C7B0", btnColor:" ", id: '1'},
        {name:"Ginger Lemon", price:"$34.99", imgSRC: gingerImg, bgColor:"#EAE0C7",btnColor:"",id:'2'},
        {name:"Orange", price:"$34.99", imgSRC: orangImg, bgColor:"#F86D42",btnColor:" ", id:3},
        {name:"Root Beer", price:"$34.99", imgSRC: rootbeerImg, bgColor:"#ACD3D8",btnColor:"#FB354C ", id:'4'},
        {name:"Strawberry Vanilla", price:"$34.99", imgSRC: strawberryImg, bgColor:"", btnColor:" ",id: '5'},
        {name:"Cherry Vanilla", price:"$34.99", imgSRC: cherryImg, bgColor:"", btnColor:" ",id: '6'},

];

export const socialIcons = [

        { name:"instagram", imgSRC: insta, id: '1' },
        { name:"facebook", imgSRC: fb, id: '2' },
        { name:"twitter", imgSRC: twitter, id: '3'},
        { name:"linkedin", imgSRC: linkedin, id: '4'},
        { name:"pinterest", imgSRC: pinterest, id:'5'}
];

export const navigationLinks = 
    [
        { name:"", path:"/home", id: '1' },
        { name:"Shop Online", path:"/shop", id: '2' },
        { name:"Find in Store", path:"/search", id: '3'},
        { name:"Learn More", path:"/more", id: '4'}
];

export const infoLinks = [
        { name:"About Us", path:"/", id: '1' },
        { name:"Contact Us", path:"/", id: '2' },
        { name:"Terms", path:"/", id: '3'},
        { name:"Privacy", path:"/", id: '4'}
];