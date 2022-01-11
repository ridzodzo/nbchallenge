import React from 'react';

class ShowInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://api.tvmaze.com/shows/1/cast")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.map(item => ({
                  id: item.person.id[0] ? item.person.id[0] : "No id",
                  name: item.person.name ? item.person.name : "No name",
                  country: item.person.country.name ? item.person.country.name : "No country",
                  birthday: item.person.birthday ? item.person.birthday : "No birthday",
                  gender: item.character.gender ? item.character.gender : "No gender",
                  character: item.character.name ? item.character.name : "No character",
                  url: item.character.url ? item.character.url : "No url",
                }))
              });console.log(result);
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
            <div className="tables">
              <div className="info_table" key={items[0].id}>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Show Info</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Name: {items[0].name}</td>
                      </tr>
                      <tr>
                        <td>Country: {items[0].country}</td>
                      </tr>
                      <tr>
                        <td>Birthday: {items[0].birthday}</td>
                      </tr>  
                      </tbody>
                                          
                    </table>
                </div>

                <div className="info_table" key={items[0].id}>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Additional Info</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Name: {items[0].character}</td>
                      </tr>
                      <tr>
                        <td>Country: {items[0].gender}</td>
                      </tr>
                      <tr>
                        <td>Birthday: {items[0].url}</td>
                      </tr>  
                      </tbody>
                                          
                    </table>
                </div>

            </div>
                
              
          );
        }
      }
    }

export default ShowInfo;
