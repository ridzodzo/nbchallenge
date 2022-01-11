import React from 'react';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=girls")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.map(item => ({
              id: item.show.id,
              name: item.show.name,
              image: item.show.image ? item.show.image.medium: "https://via.placeholder.com/286",
              rating: item.show.rating,
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
            //this key should be unique in order to differentiate elements in the array
            
            <div key={item.id}>
              <image src={item.image} alt="some image"></image>
              {item.name}
            </div>
          ))}
        </ul>
      );
    }
  }
}

export default GetData;