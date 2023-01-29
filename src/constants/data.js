import {images} from "./index";

const navItems = [
    {
        linkTo: 'home',
        linkText: 'Home'
    },
    {
        linkTo: 'about',
        linkText: 'About'
    },
    {
        linkTo: 'skills',
        linkText: 'Skills'
    },
    {
        linkTo: 'work',
        linkText: 'Experience'
    },
    {
        linkTo: 'contact',
        linkText: 'Contact'
    }
]

const skillItems = [
    {
        src: images.Karate,
        altText: 'Karate icon',
        text: 'Karate'
    },
    {
        src: images.Postman,
        altText: 'Postman icon',
        text: 'Postman'
    },
    {
        src: images.JS,
        altText: 'JavaScript icon',
        text: 'JavaScript'
    },
    {
        src: images.React,
        altText: 'React icon',
        text: 'SQL'
    },
    {
        src: images.CSS,
        altText: 'CSS icon',
        text: 'CSS'
    },
    {
        src: images.MongoDB,
        altText: 'Mongo icon',
        text: 'Jira'
    },
    {
        src: images.GitHub,
        altText: 'GitHub icon',
        text: 'GitHub'
    },
    {
        src: images.Photoshop,
        altText: 'Photoshop icon',
        text: 'IntelliJ'
    }
]

const workItems = [
    {
        imageUrl: images.DashboardImg,
        appName: 'Dashboard App',
        button1: 'Demo',
        button1Href: '#',
        button2: 'Code',
        button2Href: '#',
    },
    {
        imageUrl: images.ExpensifyImg,
        appName: 'Expense Manager App',
        button1: 'Demo',
        button1Href: 'https://www.expensify.com/',
        button2: 'Code',
        button2Href: 'https://www.github.com/',
    },
    {
        imageUrl: images.RealEstateImg,
        appName: 'React JS Application',
        button1: 'Demo',
        button1Href: '#',
        button2: 'Code',
        button2Href: '#',
    },
    {
        imageUrl: images.RealEstateImg,
        appName: 'React JS Application',
        button1: 'Demo',
        button1Href: '#',
        button2: 'Code',
        button2Href: '#',
    },
    {
        imageUrl: images.WorkImg,
        appName: 'React JS Application',
        button1: 'Demo',
        button1Href: '#',
        button2: 'Code',
        button2Href: '#',
    },
    {
        imageUrl: images.DashboardImg,
        appName: 'Dashboard App',
        button1: 'Demo',
        button1Href: '#',
        button2: 'Code',
        button2Href: '#',
    }
]

const dataObjects = {
    navItems,
    skillItems,
    workItems,
};

export default dataObjects;
