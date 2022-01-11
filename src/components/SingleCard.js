import React from 'react';
// import Card from 'react-bootstrap/Card';

class SingleCard extends React.Component {

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
                items: result.map(element => ({
                  id: element.show.id ? element.show.id : "No id",
                  name: element.show.name ? element.show.name : "No name",
                  images: element.show.image ? element.show.image.medium : "https://via.placeholder.com/210x295",
                  schedule: element.show.schedule.time ? element.show.schedule.time : "No schedule",
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
        const { error, isLoaded, index } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="singlecard">
                <img src={index[0].images} alt="slika"></img>
            </div>
          );
        }
      }
    }

export default SingleCard;
