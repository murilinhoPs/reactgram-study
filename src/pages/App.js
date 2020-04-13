import React from "react";
import "./App.css";

import Photo from "../components/photo_content/index";

function App() {
  const myProfileData = {
    src: "https://miro.medium.com/max/3840/1*ivjksIhvAs7TUXbQCxAU0A.jpeg",
    user: {
      name: "murilinhops",
      profile_image:
        "https://instagram.fcgh11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72150440_585225525552082_8166883981246070784_n.jpg?_nc_ht=instagram.fcgh11-1.fna.fbcdn.net&_nc_ohc=78HqPpLlpCEAX-WNNdk&oh=dd13ac749a41246741f1d17720cb438c&oe=5EBCB808",
      link: "https://www.instagram.com/murilinhops/",
    },
    legend: "Treinando ReactJs",
  };

  const myFlutterData = {
    src:
      "https://raw.githubusercontent.com/murilinhoPs/challenge_nike_app/master/images/animated.jpg",
    legend: "Treinando design e animações em flutter",
  };

  const gitHubData = {
    src: "https://i.imgur.com/0z0VEYF.png",
    user: {
      name: "github",
      profile_image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      link: "https://www.instagram.com/github/",
    },
    legend: "Open collaboration on COVID-19",
  };

  return (
    <div className="App">
      <Photo
        url={myProfileData.src}
        legend={myProfileData.legend}
        name={myProfileData.user.name}
        profile_image={myProfileData.user.profile_image}
        profile_link={myProfileData.user.link}
      />
      <Photo
        url={gitHubData.src}
        legend={gitHubData.legend}
        name={gitHubData.user.name}
        profile_image={gitHubData.user.profile_image}
        profile_link={gitHubData.user.link}
      />
      <Photo
        url={myFlutterData.src}
        legend={myFlutterData.legend}
        name={myProfileData.user.name}
        profile_image={myProfileData.user.profile_image}
        profile_link={myProfileData.user.link}
      />
    </div>
  );

  // return (
  //   <div className="App">
  //     <Photo {...imageData} />
  //   </div>
  // );
}

export default App;
