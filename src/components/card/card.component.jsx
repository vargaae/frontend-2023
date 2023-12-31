import "./card.styles.css";

const Card = ({user: {name, email, website, id} }) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt={`user ${name}`}
        src={`https://robohash.org/${id}?set=set3&size=180x180`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
}
// class Card extends Component {
//   render() {
//     const { name, email, website, id } = this.props.user;

//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`user ${name}`}
//           src={`https://robohash.org/${id}?set=set3&size=180x180`}
//         />
//         <h3>{name}</h3>
//         <p>{email}</p>
//         <p>{website}</p>
//       </div>
//     );
//   }
// }

export default Card;
