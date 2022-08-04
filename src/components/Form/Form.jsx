import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import styles from '../Form/Form.module.css'
import { addUser } from 'redux/contacts/contactsActions';
import {connect} from 'react-redux'
export class Form extends Component {
  static propTypes={
    addContactsData: PropTypes.func.isRequired,
  }
  state = {
    name: '',
    number: '',
  }

  onChange = ({ target: { name, value } }) => {
    
    this.setState({
      [name]: value,
    });
  };

  onSubmit=evt=>{
    evt.preventDefault();
    let id = nanoid();
    const isHere = this.props.items.some(({name})=>name ===evt.target.name)
    
    // const contact = { ...this.state, id };
    this.props.addContactsData({...this.state, id: nanoid() });

    this.setState({
      name: '',
      number: '',
    })
    
  }

  render() {
    const{name, number}=this.state
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <label className={styles.label}>
          Name
          <input
          value={name}
            className={styles.input}
            type="text"
            name="name"
            required
            onChange={this.onChange}
          />
        </label>
        <label
        className={styles.label}>
        
          Number
          <input
          className={styles.input_last}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.onChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
const mapStateToProps=({state})=>{
const{items}=state.contacts
return {items}
}


const mapDispatchToProps=(dispatch)=>({
  addContactsData: user=> dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)