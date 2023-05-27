import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import { Box } from "@mui/material";

export default class Testimonials extends Component {
  state = {
    users: [],
    descriptions: [
      "Eccellente servizio di decorazione! Le pareti della mia casa sono diventate un'opera d'arte grazie a Gran Color.",
      "Cartongesso impeccabile! Il team di Gran Color ha creato pareti divisorie perfette per il mio spazio.",
      "La calce cruda di Gran Color ha dato un tocco rustico e naturale alle mie pareti. Sono davvero soddisfatto del risultato.",
    ],
  };

  componentDidMount() {
    this.fetchUserdata();
  }

  fetchUserdata = () => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        const { descriptions } = this.state;
        const usersWithDescription = data.results.map((user, index) => ({
          ...user,
          description: descriptions[index] || "",
        }));
        this.setState({ users: usersWithDescription });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  render() {
    const { users } = this.state;

    return (
      <Box
        sx={{ padding: "1rem", backgroundColor: "rgba(255, 255, 255, 0.12)" }}
      >
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          {users.map((user) => (
            <div key={user.login.uuid}>
              <img src={user.picture.large} alt={user.name.first} />
              <div className="myCarousel">
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
                <h4>{user.title}</h4>
                <p>{user.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Box>
    );
  }
}
