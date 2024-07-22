const reviews= 
[
    {
        id:1,
        name:"Johnson",
        job:"Software Engineer",
        img:'images/man.png',
        text: "Jhonson is a passionate software engineer with a knack for problem-solving and a love for crafting elegant code solutions. She thrives in collaborative environments and is always eager to learn about the latest technologies."
    },
    {
        id:2,
        name:"Alexander Martinez",
        job:"Marketing Specialist",
        img:'images/man1.png',
        text: "Alexander is a creative and data-driven marketing specialist. He excels in developing innovative marketing campaigns that captivate audiences and drive results. With a strong analytical mindset, he's constantly seeking ways to optimize strategies for maximum impact."
    },
    {
        id:3,
        name:"Ethan Anderson",
        job:"Mechanical Engineer",
        img:'images/man2.png',
        text: "Ethan is a skilled mechanical engineer who enjoys designing innovative solutions to complex problems. His attention to detail and passion for precision make him a valuable asset in any engineering team."
    },
    {
        id:4,
        name:"Benjamin Lee",
        job:"Financial Analyst",
        img:'images/man3.png',
        text: "Benjamin is a detail-oriented financial analyst with a deep understanding of market trends and economic indicators. He has a track record of providing insightful financial analysis that guides informed decision-making and maximizes profitability."
    },
    {
        id:5,
        name:"Daniel Mitchell",
        job:"Investment Analyst",
        img:'images/man4.png',
        text: "Daniel is a meticulous investment analyst who excels in researching market trends and evaluating financial opportunities. His analytical insights contribute to informed investment decisions and portfolio growth."
    },
    {
        id:6,
        name:"Liam Thompson",
        job:"Creative Director",
        img:'images/man5.png',
        text: "Liam is a visionary creative director with a talent for conceptualizing and executing impactful marketing campaigns. His ability to blend artistic expression with strategic thinking results in memorable brand experiences."
    },
    {
        id:7,
        name:"William Clark",
        job:"Neuroscientist",
        img:'images/man6.png',
        text: "William is a dedicated neuroscientist who is passionate about unraveling the mysteries of the brain. His research contributes to advancements in understanding cognition and neurological disorders."
    },
    {
        id:8,
        name:"James Rodriguez",
        job:"Chef de Cuisine",
        img:'images/man7.png',
        text: "James is a masterful chef with a flair for culinary innovation. His gastronomic creations showcase a fusion of flavors that delight the palates of diners, earning him a reputation as a culinary maestro."
    },
    {
        id:9,
        name:"Samuel Wright",
        job:"Investigative Journalist",
        img:'images/man8.png',
        text: "Samuel is a fearless investigative journalist who tirelessly seeks the truth. His compelling storytelling and commitment to uncovering hidden stories have earned him a reputation as a voice for justice."
    },
    {
        id:10,
        name:"Jackson Mitchell",
        job:"Environmental Activist",
        img:'images/man9.png',
        text: "Jackson is a passionate environmental activist who advocates for sustainable practices and conservation efforts. His dedication to raising awareness about environmental issues inspires positive change within communities."
    }
]

//select items
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

// console.log(img,author,job,info)

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

//start with 0 which will represent first item in array

let currentItem=0;

//once my document load display the first item 

//it will be loaded when the htmlo document comletely loaded
window.addEventListener("DOMContentLoaded",function(){
    showPerson();    
})

function showPerson(){
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

//next btn
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson();
})
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson();
})
randomBtn.addEventListener('click',function(){
    surpriseItem=Math.floor(Math.random()*reviews.length);
    currentItem=surpriseItem;
    console.log(currentItem=surpriseItem);
    showPerson();
})




