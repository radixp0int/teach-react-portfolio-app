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
        linkText: 'Work'
    },
    {
        linkTo: 'contact',
        linkText: 'Contact'
    }
]

const skillItems = [
    {
        src: images.Angular,
        altText: 'Angular icon',
        text: 'Angular'
    },
    {
        src: images.Spring,
        altText: 'Spring icon',
        text: 'Spring'
    },
    {
        src: images.JS,
        altText: 'JavaScript icon',
        text: 'JavaScript'
    },
    {
        src: images.React,
        altText: 'React icon',
        text: 'React'
    },
    {
        src: images.NodeJS,
        altText: 'Node icon',
        text: 'Node'
    },
    {
        src: images.MongoDB,
        altText: 'Mongo icon',
        text: 'Mongo'
    },
    {
        src: images.GitHub,
        altText: 'GitHub icon',
        text: 'GitHub'
    },
    {
        src: images.Photoshop,
        altText: 'Photoshop icon',
        text: 'Photoshop'
    }
]

const workItems = [
    {
        imageUrl: images.DashboardImg,
        appName: 'Dashboard App',
        button1: 'Demo',
        button2: 'Code',
    },
    {
        imageUrl: images.ExpensifyImg,
        appName: 'Expense Manager App',
        button1: 'Demo',
        button2: 'Code',
    },
    {
        imageUrl: images.RealEstateImg,
        appName: 'React JS Application',
        button1: 'Demo',
        button2: 'Code',
    },
    {
        imageUrl: images.RealEstateImg,
        appName: 'React JS Application',
        button1: 'Demo',
        button2: 'Code',
    },
    {
        imageUrl: images.WorkImg,
        appName: 'React JS Application',
        button1: 'Demo',
        button2: 'Code',
    },
    {
        imageUrl: images.DashboardImg,
        appName: 'Dashboard App',
        button1: 'Demo',
        button2: 'Code',
    }
]

export default {
    navItems,
    skillItems,
    workItems,
}