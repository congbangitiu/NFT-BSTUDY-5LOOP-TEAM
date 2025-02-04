import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useForm, ValidationError } from "@formspree/react";

const ContactContent = (props) => {
  const { contactTitle, contactSubTitle, mapIframeSource } = props;
  const [state, handleSubmit] = useForm("xblrjjvr");


  if (state.succeeded) {
    return (
      <Alert variant="" style={{ backgroundColor: 'transparent', fontSize: '45px', fontWeight: 'bold'}} className="text-center">
        Thanks for contacting us!
      </Alert>
    );
}

  return (
    <div className="contact-wrapper">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Contact Form */}
          <div className="col-12 col-lg-6">
            <div className="contact-form">
              {/* Heading Info */}
              <h1 className="mb-3">{contactTitle}</h1>
              <p className="mb-5">{contactSubTitle}</p>

              {/* Form */}
              <Form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-12">
                    <Form.Control
                      type="text"
                      placeholder="Your Full Name"
                      id="name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <Form.Control
                      type="email"
                      placeholder="Your Email Address"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <Form.Control
                      type="text"
                      placeholder="Your Questions"
                      id="questions"
                      name="questions"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <Form.Control
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Write your question details"
                    />
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary rounded-pill"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Send ticket
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="col-12 col-lg-6">
            <div className="maps-wrap">
              <iframe title="Google Maps" src={mapIframeSource} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
