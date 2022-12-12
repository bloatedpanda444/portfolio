import panda from "./detective_panda.png"
import patty from "./pressuredpatty.png";
import chs from "./CHS.png";
import delight from "./delight-sh.png"
import develop from "./devlop.png"


export const content = {
    Home: {
        image: panda,
        header: "Bloated Panda",
        header2: "Welcome!",
        info1: "Hello, I am Bloated Panda, and welcome to my portfolio! I believe that every project you work on can be seen as an investigation, especially in design. You have to gain a deep understanding about how users interact with various technologies to build a successful product. Therefore I have structured this portfolio like a detective would! Click through the different case files to see some of my various UI/UX work. Enjoy :)",
        header3: "About Me",
        info2: "I am a current senior at Brown University studying computer science. I am originally from Maryland although I will be moving to Boston next year! In my free time I enjoy binge watching Survivor, going on long walks, and reading all about murder mysteries! ",
        button: false,
        url: ""

    },
    Personas: {
        image: patty,
        header: "Personas",
        header2: "Investigation",
        info1: "For this project I studied how users interacted with a very peculiar washing machine in my apartment building. This washing machine in particular had a very confusing set of controls that often left users having no clue how long their clothes would wash for. The goal of this project was to first study users interacting with the machine and then create user personas to demonstrate the user experience!",
        header3: "Findings",
        info2: "After interviewing my users I found that every single one could not tell how long the machine would run for. I observed that this would frustrate users as it made it hard for them to plan around. Because of this I created two personas, Pressured Patty and Tired Tyler. The final product was a comic of Tired Tyler trying to use the washing machine which demonstrated just how frustrating the process was.",
        button: true,
        url: "https://bloatedpanda444.github.io/personas/"
    },
    Redesign: {
        image: chs,
        header: "Redesign",
        header2: "Investigation",
        info1: "When thinking about poorly designed websites, the first thing that came to mind was my old high school theatre page. The page is both chaotic yet bland and very confusing to use. So, I embarked on my journey back to high school to fix this horrid website and make it responsive to different sized devices!",
        header3: "Findings",
        info2: "This redesign was incredibly fun! My overall design principle was to keep it simple yet understandable. This came with removing many of the excessive sections of the page and placing a greater focus on the company itself. This project taught me a lot about responsive design as well, as it utilizes many different media queries to make the website look great on all devices.",
        button: true,
        url: "https://bloatedpanda444.github.io/Responsive_design/"
    },
    Iterative: {
        image: delight,
        header: "Iterative Design",
        header2: "Investigation",
        info1: "This project involved creating an interactive interface for a new app! The app is a mobile dating app for more serious relationships, so you only talk to one person at a time. This project was done using interactive figma prototypes and involved implementing feedback from user tests!",
        header3: "Findings",
        info2: "We were able to receive feedback from multiple sources during this project and they all greatly shaped the design. One example of a major change was fleshing out the color scheme for the app. The change involved having the app fully blue when single and then pink while matched. This change allowed the app to have more defined and clear stages.",
        button: true,
        url: "https://bloatedpanda444.github.io/iter/"
    },
    Development: {
        image: develop,
        header: "Development",
        header2: "Investigation",
        info1: "For this project I made an interactive react app that allows users to track which Marvel movies they have watched. Additionally, users can filter the movies by various categories such as what phase they are in. Finally, users can sort the movies by date, runtime, and box office.",
        header3: "Findings",
        info2: "This project taught me a lot about react and asynchronous programming. The app utilizes both react states and hooks to properly update the data based on the filters and sorts selected. The project also utilizes components to make all of the cards for the movies. Overall it was very fun to create an app all about movies I love!",
        button: true,
        url: "https://bloatedpanda444.github.io/Develop/"
    }
}