



document.getElementById("section1").innerHTML +=`
      <h1 id="herotitle">Discover Stories from
            Around the World</h1>
                <img id="heroimg" class="heroimg" src="img/heroimg.png" alt="">
                <button id="explore" class="explore">Explore Stories</button>
                <img class="paper" src="img/paper.svg" alt="">


`
document.getElementById("section2").innerHTML +=`
        <div id="title" class="title">
                What Are We
            </div>
            <div class="sectcontent">
                <div id="sec2txt" class="sec2txt">
                    <p class="secp">We bring together the world's most captivating stories, preserving cultural heritage through digital storytelling. From ancient Egyptian myths to Nordic legends, explore humanity's shared imagination across languages and cultures.</p>
                    <div id="cards" class="cards">
                    </div>
                </div>

                <img id="earth" class="earth" src="img/earth.svg" alt="">
            </div>
            <img class="paper" src="img/paper.svg" alt="">
`

document.getElementById("section3").innerHTML +=`
       <h1>
                Featured Stories
            </h1>
            <div id="stories" class="stories">
                
            </div>
            <img class="paper" src="img/paper.svg" alt="">
`
let cards = [
    {
        icon : "img/i.svg",
        title : "Stories from Different Cultures",
        details: "Explore tales from every continent and discover the rich diversity of human storytelling."
    },
    {
        icon : "img/Vector-1.svg",
        title : "Multilingual Experience",
        details: "Read stories in English, Arabic, French, and experience authentic cultural perspectives."
    },
    {
        icon : "img/Vector-2.svg",
        title : "Immersive Visuals",
        details: "Beautiful illustrations and designs that bring each story to life with authenticity."
    }
]

for ( i = 0; i < cards.length; i++){
    document.getElementById("cards").innerHTML +=
    `
    <div class="card">
       <img src=${cards[i].icon} alt="">
       <h3>${cards[i].title}</h3>
       <p>${cards[i].details}</p>
    </div>
    `

}

let stories = [
    {
        img : "img/1.png",
        title : "Noura & the firefly",
        author: "Ahmed Sherif",
        flag: "img/twemoji_flag-egypt.svg",
        desc: "Join Noura as a tiny glowing firefly guides her safely across the magical desert to her village.",
        lang : "EN / AR"
    },
    {
        img : "img/2.png",
        title : "The white bird",
        author: "Edward Cole",
        flag: "img/twemoji_flag-greece.svg",
        desc: "Ancient Celtic magic flows through sacred stones, where a young druid must prove worthy of the old ways.",
        lang : "EN / FR"

    },
    {
        img : "img/3.png",
        title : "The Magical Guitar",
        author: "Emilly Dunne",
        flag: "img/twemoji_flag-india.svg",
        desc: "A beautiful spirit fox tests the kindness of a young farmer, teaching lessons about compassion.",
        lang : "FR/ AR"
    }
]

for ( i = 0; i < stories.length; i++){
    document.getElementById("stories").innerHTML +=
    `
   <div class="story">
                   <img src=${stories[i].img} alt="">
                    <div class="row1">
                        <div class="name">
                            <h4>${stories[i].title}</h4>
                            <h6>${stories[i].author}</h6>
                        </div>

                        <div class="langflag">
                            <img src=${stories[i].flag} alt="">
                            <div class="langtyp">
                               ${stories[i].lang}
                            </div>
                        </div>
                        
                        
                    </div>
                    <p>${stories[i].desc}</p>
                    <button class="read">Read Now</button>
    </div>
    `

}


let section1 = document.getElementById("section1");
let herotitle = document.getElementById("herotitle");
let heroimg = document.getElementById("heroimg");

        section1.onmouseenter = function () {

            herotitle.style.opacity = "1";
            herotitle.style.transform = "translateY(0)";
            heroimg.style.opacity = "1";
            heroimg.style.transform = "translateX(0)";

        }

let section2 = document.getElementById("section2");
let title = document.getElementById("title");
let sec2txt = document.getElementById("sec2txt");
let earth = document.getElementById("earth");

        section2.onmouseenter = function () {

            title.style.opacity = "1";
            title.style.transform = "translateY(0)";
            sec2txt.style.opacity = "1";
            sec2txt.style.transform = "translateX(0)";
            earth.style.opacity = "1";
            earth.style.transform = "translateX(0)";


        }

