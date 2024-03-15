import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import { Box } from "@mui/material";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import StarHalf from "@mui/icons-material/StarHalf";

export default class Testimonials extends Component {
  state = {
    users: [
      {
        name: { first: "PETRA", last: "GRAZZI" },
        picture: {
          large:
            "https://lh3.googleusercontent.com/a/ACg8ocIdvrM-YgNg4U7rhHJpTUilNt27A0v26Snv9N2hufkk=w60-h60-p-rp-mo-br100",
        },
        description:
          "Graziano è una garanzia, non soltanto come professionista ma come persona. Perfezionista, attento ai dettagli, veloce nell'esecuzione, sa dare i giusti consigli con estrema pacatezza ed educazione al fine di rendere il lavoro migliore di quanto ti sia immaginato. È raro trovare persone che sappiano davvero lavorare come si deve, che si preoccupano di trovare la soluzione o l'alternativa ad una richiesta perché realmente interessati che il risultato finale sia davvero apprezzato, e far felice il cliente. Questo lavoro è la sua passione e si vede. Grazie di cuore per aver trasformato il mio piccolo spazio di lavoro in un bellissimo ambiente. Grazie a tutto il team, vi auguro il meglio. Petra",
        rating: 4.5, // Esempio di valutazione
      },
      {
        name: { first: "Luigi", last: "Formisano" },
        picture: {
          large:
            "https://lh3.googleusercontent.com/a/ACg8ocKcsp8jZ_kWwnnaTy8ZHuYFobXTjbFD-NcoS6VejpYz=w60-h60-p-rp-mo-br100",
        },
        description:
          "Conosciuto Graziano quasi due anni fa e sono rimasto molto soddisfatto dalla sua professionalità e precisione nei lavori fatti. Chiamato anche poco tempo fa per un nuovo progetto in fase di studio. Anche questa volta si presentato con idee e suggerimenti molto interessanti.",
        rating: 5, // Esempio di valutazione
      },
      {
        name: { first: "Alessandro", last: "Cozzuto" },
        picture: {
          large:
            "https://lh3.googleusercontent.com/a/ACg8ocJzvAJUl5B-gwXh3fyLpE2Bkg8Wl4FSLo8dqtb6tX5n=w60-h60-p-rp-mo-br100",
        },
        description:
          "Sono rimasto estremamente soddisfatto del lavoro svolto da Graziano che ho assunto per ridare nuova vita alle pareti della mia casa. La sua professionalità, la qualità del suo lavoro e l'attenzione ai dettagli hanno superato di gran lunga le mie aspettative.",
        rating: 5, // Esempio di valutazione
      },
    ],
  };

  // Funzione per generare le stelle di valutazione
  renderRating(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<Star key={i} />);
      } else if (rating >= i + 0.5) {
        stars.push(<StarHalf key={i} />);
      } else {
        stars.push(<StarBorder key={i} />);
      }
    }
    return stars;
  }

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
          {users.map((user, index) => (
            <div key={index}>
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <div className="myCarousel">
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
                <div className="description">{user.description}</div>
                <div>{this.renderRating(user.rating)}</div>{" "}
                {/* Mostra le stelle di valutazione */}
              </div>
            </div>
          ))}
        </Carousel>
        <img
          src="..\grancolor\myapp\src\assets"
          alt="Google"
          className="google-logo"
        />{" "}
      </Box>
    );
  }
}
