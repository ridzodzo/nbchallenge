import React from 'react';
// import Card from 'react-bootstrap/Card';
import RatingStars from './RatingStars';

class CardDesktop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://api.tvmaze.com/search/shows?q=drama")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.map(item => ({
                  id: item.show.id ? item.show.id : "No id",
                  name: item.show.name ? item.show.name : "No name",
                  image: item.show.image ? item.show.image.medium : "https://via.placeholder.com/210x295",
                  schedule: item.show.schedule.time ? item.show.schedule.time : "No schedule",
                }))
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                   <div className="item_container" key={item.id}>
                      <div className="item_image">
                        <img src={item.image} alt="slika"></img>
                      </div>
                      <div className="item_info">
                        <RatingStars />
                        <p>{item.name}</p>
                        <p>{item.schedule}</p>
                      </div>
                    </div>                   

              ))}
            </ul>
          );
        }
      }
    }

export default CardDesktop;
