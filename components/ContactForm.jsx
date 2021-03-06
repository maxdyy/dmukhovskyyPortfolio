import { Component } from "react";
import Button from "./Button";
import Router from "next/router";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false
    };
  }

  validateFeedback = (name, message, email) => {
    if (!name) {
      $("#form_name").addClass("invalid");
    }
    if (!message) {
      $("#form_message").addClass("invalid");
    }
    if (!email) {
      $("#form_email").addClass("invalid");
    }
  };

  handleSubmit = e => {
    const { name, message, email } = this.state;
    if (!name || !message || !email) {
      this.validateFeedback(name, message, email);
      e.preventDefault();
    } else {
      const formData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        message: document.querySelector("textarea[name='message']").value
      };

      fetch("/api/contact", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }).then(res => {
        res.status === 200
          ? this.setState({ submitted: true })
          : console.log("Mail submit failed");
      });
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, submitted } = this.state;

    if (submitted) {
      Router.push("/success");
    }

    return (
      <section className="contact-form">
        <div className="form-container">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(e);
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-field form-name">
              <input
                name="name"
                id="form_name"
                type="text"
                className="validate"
                value={name}
                onChange={this.handleChange}
              />
              <label htmlFor="form_name">Name</label>
            </div>
            <div className="input-field form-email">
              <input
                name="email"
                id="form_email"
                type="email"
                className="validate"
                value={email}
                onChange={this.handleChange}
              />
              <label htmlFor="form_email">Email</label>
            </div>
            <div className="input-field form-message">
              <textarea
                name="message"
                id="form_message"
                className="materialize-textarea validate"
                value={message}
                onChange={this.handleChange}
              />
              <label htmlFor="form_message">Message</label>
            </div>
            <div className="row">
              <div>
                <Button text="submit" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
