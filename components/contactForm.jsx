var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        <form className={'contactForm'}> 
            <input type="text" name="imię" value={this.props.contact.firstName}/>
            <input type="text" name="nazwisko" value={this.props.contact.lastName}/>
            <input type="email" name="Email" value={this.props.contact.email}/>
            <button type='submit'>Dodaj kontakt</button>
        </form>
      
      )
      
},
})