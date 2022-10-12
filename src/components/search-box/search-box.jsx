import { Component } from "react";
import './search-box.styles.css'
class SearchBox extends Component {
    render(){
    return(
        <input 
        className={`search-field ${this.props.className}`}
        type='search monsters name' 
        placeholder={this.props.searchPlacholder}
        onChange={this.props.onChangeHandler}
        > 
        </input>
    )
    }
}
export default SearchBox