const  express = require('express')
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");

app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"public")))

app.engine('ejs', ejsMate);

app.get("/",(req,res)=>{

    res.render("pages/home.ejs",{data,projects})
});

const d = new Date();
let year = d.getFullYear();

const data = {
    name: "Mohsin Khan",
    img_url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    para: "I am a passionate web developer with a strong desire to create user-friendly and visually appealing websites. I am skilled in various programming languages and frameworks, and I am always eager to learn new technologies.",
    education: {
      degree: "Bachelor of Computer Application",
      university: "RTMNU",
      year: 2024,
    },
    work: {
      position: "",
      company: "",
      from: "",
    },
    insta: "https://www.instagram.com/mohsiiinnn_khan",
    git: "https://github.com/mohsinmkhan12",
    linkedin: "https://www.linkedin.com/in/mohsinmkhan12/",
    mobile: "+917378813172",
    mail: "mohsinmkhan.09@gmail.com",
    address: "Amar Nagar, Nildoh,MIDC,Nagpur",
    year:year


  };


// https://ibb.co/dPzbBNX
// https://ibb.co/WkHyGVz
// https://ibb.co/vJSM24W
// https://ibb.co/gmkKctX

  const projects = [
    {
      title: "Wallpaper Store",
      description: "The Website to browse and download high quality wallpapers.",
      image: "https://i.ibb.co/YtxVvBS/wallpaper-store.png",
      link: "https://wallpapers-store.onrender.com/"
    },
    {
      title: "Weather Forecast",
      description: "A weather forecast application using OpenWeatherMap API.",
      image: "https://i.ibb.co/ZGqDbcw/weather-app.png",
      link: "https://weather-epic.netlify.app/"
    },
    {
      title: "Quiz Application",
      description: "Quiz application using HTML, CSS, and JavaScript and OpenDB API.",
      image: "https://i.ibb.co/dPf2jmp/quiz-app.png",
      link: "https://quizz-website.netlify.app/",
      link: "https://quizz-website.netlify.app/"
    },
    {
      title: "Portfolio Website",
      description: "Portfolio website using Ejs, NodeJS, ExpressJS, MondoDBand TailwindCSS.",
      image: "https://i.ibb.co/njz8Wsw/portfolio.png",
      link: "#",
    },
  ];


  app.get("/about", (req, res) => {
    res.render("pages/about.ejs", { data });
  });


app.get("/project",(req,res)=>{
    res.render("pages/project.ejs",{projects,data})
});
app.get("/contact",(req,res)=>{
    res.render("pages/contact.ejs",{data})
});
app.get("/demo",(req,res)=>{
    res.render("pages/demo.ejs")
});

app.listen(8080,()=>{
    console.log("Server is Listning at port 8080");
})