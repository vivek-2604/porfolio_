// typing Animation

var typed = new Typed(".typing", {
    strings:["web Designer","Web Devloper","React Devloper","Database Devloper"],
    typeSpeed:80,
    backSpeed:100,
    loop: true
})

//  Aside

const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;

        for(let i=0; i<totalNavList; i++)
        {
            const a= navList[i].querySelector("a");
            a.addEventListener("click", function()
            {    
                removeBacksection();

                for(let j=0; j<totalNavList; j++)
                {  
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBcksection();
                        //allSection[j].classList.add("back-Section");
                    }

                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);   

                if(window.innerWidth < 1200)
                {
                    asideSectionToggelerBtn();
                }
            })
        }

        function removeBacksection()
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.add("back-section");
            }
        }

        function addBcksection()
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
        }

        function showSection(element)
        {
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active")
            }
            const target = element.getAttribute("href").split("#")[1]
            document.querySelector("#" + target).classList.add("active")
        }

        function updateNew(element)
        {
            for(let i=0; i<totalNavList; i++)
            {
                navList[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];

                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
            }
        }

        document.querySelector(".hire-me").addEventListener("click", function()
        {
            removeBacksection();
            addBcksection();
            showSection(this);
            updateNew(this);
        }
        )

const navTogglerBtn = document.querySelector(".nav-toggler")
        ,aside = document.querySelector(".aside");

        navTogglerBtn.addEventListener("click", () => {
            asideSectionToggelerBtn();
        })

function asideSectionToggelerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open")
    }
}