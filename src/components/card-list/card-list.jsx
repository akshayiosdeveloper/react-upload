import { Component } from "react";
import Card from "../card/card.componet";
import './card-list-styles.css'
class CardList extends Component {
    render(){
        console.log(this.props);
        const {monsters} = this.props;
        return (
           <div className="card-list">
            {monsters.map((monster) => {
         //const {name , email , id } = monster;
         return(
            <Card monster={monster}/>
         )
        //  return(
        //     <div className='card-container'key={id}>
        //    <img 
        //     alt={`monster${name}`}
        //     src={`https://robohash.org/${id}?set=set2&size = 180 × 180`}
        //    >
        //    </img>
        //    <h2>{name}</h2>
        //    <p>{email}</p>
        //     </div>
        //  )
            })}


           </div>
        )
    }
}
export default CardList;