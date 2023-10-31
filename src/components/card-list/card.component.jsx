import { Component } from "react";

import './card.styles.css'

class Card extends Component {
  render() {
    const { user } = this.props;
    const { name, email, website, id } = user

 
          return (
            <div className="card-container" key={id}>
            <img alt={`user ${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`} />  
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{website}</p>
            </div>
        )}}

export default Card;
