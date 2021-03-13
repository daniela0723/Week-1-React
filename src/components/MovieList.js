import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
  render() {
    let movieOne = {
      title: "Promising Young Woman",
      year: "(2020)",
      uri:
        //I was unable to get the correct relative path of the image file.
        "https://www.vitalthrills.com/wp-content/uploads/2020/10/promisingyoungwoman7.jpg",
      rating: "R",
      genres: "Mystery, Thriller, Comedy",
      description:
        "A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.",
    };

    let movieTwo = {
      title: "Nomadland",
      year: "(2020)",
      uri:
        "https://cdn.onebauer.media/one/media/5ffd/b4a0/8120/2e5a/fdcd/2e70/UK%201$_lantern_AW_Nomadland.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit",
      rating: "R",
      genres: "Drama",
      description:
        "After losing everything in the Great Recession, a woman embarks on a journey through the American West, living as a van-dwelling modern-day nomad.",
    };

    let movieThree = {
      title: "The Trial of the Chicago 7",
      year: "(2020)",
      uri:
        "https://1.bp.blogspot.com/-IhAF7zEy4Mw/X19lxYjA33I/AAAAAAABd9o/Zll8qfQzXO0cuwQ2LTBLsapL0pHtiX15wCLcBGAsYHQ/s1600/The-Trial-of-the-Chicago-7-poster.jpg",
      rating: "R",
      genres: "Drama, History",
      description:
        "The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago, Illinois.",
    };
    return (
      <div>
        <div className="container">
          <h1>
            2021 Oscars
            <br /> <span>Best Picture</span>
          </h1>
          <div>
            <Movie {...movieOne} />
            <br />
            <Movie {...movieTwo} />
            <br />
            <Movie {...movieThree} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
