import React from 'react';
import "./ImageClick.css";

//ImageClick renders an item contained in images.json

export const ImageClick = props => (
  <li className="list-group-item click-item">
    <col size="md-3">
      <div className="card">
        <img  id={props.id} src={props.image} alt={props.alt} />
      </div>
    </col>
  </li>
);

