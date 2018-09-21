import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import { ImageClick, ImageList } from "./components/ImageClick";
import images from "./images.json";
import Info from "./components/Info";

class App extends Component {
  state = {
    images
  };


  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-md-2 offset-md-1">
            <div className="row">
              <Info />
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <ImageList>
                {this.state.images.map(image => {
                  return (
                    <ImageClick
                      key={image.id}
                      id={image.id}
                      image={image.image}
                      alt={image.alt}
                    />
                  );
                })}
              </ImageList>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default App;
