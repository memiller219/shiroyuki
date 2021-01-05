import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  // state contains all of the imageURLs, titles, and id's for the directory
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://images.unsplash.com/photo-1605076776194-9b98ba75eb36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYW5pZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "skis",
        imageUrl: "https://images.unsplash.com/photo-1530604073106-794448af4555?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNraXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        id: 3,
        linkUrl: "shop/skis",
      },
      {
        title: "womens",
        imageUrl: "https://media.istockphoto.com/photos/skiing-fresh-powder-in-the-mountains-picture-id1163001272?k=6&m=1163001272&s=612x612&w=0&h=IdKd9qg6MdhqRF81nz48U5qD_CFCddqhGxIlou52Nz0=",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://media.istockphoto.com/photos/cheerful-skier-posing-picture-id615974412?k=6&m=615974412&s=612x612&w=0&h=qmZAM8JYVF8j3BGxJLXnmNFasmMB9YRK1LksIWERb8w=",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => {
          return (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
