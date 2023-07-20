
import { css } from "styled-components";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Desktop from "./components/Desktop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop)">
          <Desktop {...desktopData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame1Data = {
    image: "/img/image-14@2x.png",
    naviRevealsS1MpleFifthAnniversary: "Navi Reveals S1mple Fifth Anniversary",
};

const frame2Data = {
    image: "/img/image-16@2x.png",
    naviRevealsS1MpleFifthAnniversary: "T1 Unveil Partnership With Razer",
    className: "frame-36",
};

const frame3Data = {
    image: "/img/image-15@2x.png",
    naviRevealsS1MpleFifthAnniversary: "A1esports Shares New Picture",
    className: "frame-37",
};

const frame4Data = {
    image: "/img/image-17@2x.png",
    naviRevealsS1MpleFifthAnniversary: "Rx Secures Content Partnership With",
    className: "frame-38",
};

const desktopData = {
    frame1: "/img/image.png",
    futureOfEsports1: "FUTURE OF ESPORTS",
    unleashTheNextGenerationOfGaming: "Unleash The Next Generation Of Gaming",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.",
    exploreMore: "Explore More",
    viewOurTeam: "View our team",
    image3: "/img/image-1.png",
    facebook: "FACEBOOK",
    instagram: "INSTAGRAM",
    twitch: "TWITCH",
    place: "Home",
    about1: "About",
    team1: "Team",
    shop1: "Shop",
    pages: "Pages",
    text1: "",
    number: "0",
    contactUs1: "Contact Us",
    image5: "/img/image-6.png",
    futureOfEsports2: "FUTURE OF ESPORTS",
    customizeYour: "Customize Your",
    ownCharacter: "Own Character",
    sedUtPerspiciatis: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
    image7: "/img/image-8@2x.png",
    image8: "/img/image-10@2x.png",
    image9: "/img/image-7@2x.png",
    image10: "/img/image-9@2x.png",
    futureOfEsports3: "FUTURE OF ESPORTS",
    latestNews: "Latest News &",
    articles: "Articles",
    readMore: "Read More",
    image12: "/img/image-13.png",
    date: "April 2, 2021",
    esportsGroupTeams: "Esports Group Teams Up With The Indianapolis Colts",
    loremIpsumDolorAm: "Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .",
    menuItems: "Menu Items",
    blog: "Blog",
    contactUs2: "Contact Us",
    about2: "About",
    shop2: "Shop",
    otherPages: "Other Pages",
    styleguide: "Styleguide",
    licenses: "Licenses",
    team2: "Team",
    changelog: "Changelog",
    frame1Props: frame1Data,
    frame2Props: frame2Data,
    frame3Props: frame3Data,
    frame4Props: frame4Data,
};

