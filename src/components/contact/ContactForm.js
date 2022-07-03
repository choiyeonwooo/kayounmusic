import React from "react";
import { Spinner } from "react-bootstrap";
import config from "../../config";

function ContactForm() {
  const [status, setStatus] = React.useState("");

  const handleFormSubmit = (e) => {
    setStatus("loading");
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", config.CONTACT_FORM_URL);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("submitted");
      } else {
        setStatus("");
      }
    };
    xhr.send(data);
  };

  return (
    <section className="contact-form">
      <div className="container">
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <div className="col-sm-12">
              <div className="block">
                <div className="form-group">
                  <input
                    name="Name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="Email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="block">
                <div className="form-group-2">
                  <textarea
                    name="Message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-default" type="submit" disabled={status !== ""}>
                  {status === "loading" ? (
                    <Spinner animation="border" role="status" variant="secondary">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : status === "submitted" ? (
                    "Your message has been sent!"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
