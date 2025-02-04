
import '../../styles/contact.css';

const Contact = () => {
  return (
    <div id="Contact">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">Feel free to Contact!</p>
          </div>

          <div className="contact-form-container">
            <div className="contact-form-wrapper">
              <form
                className="contact-form"
                action="https://formspree.io/f/xldeeyep"
                method="POST"
              >
                <div className="contact-input-group-half">
                  <div className="contact-input-wrapper">
                    <label htmlFor="name" className="contact-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>
                <div className="contact-input-group-half">
                  <div className="contact-input-wrapper">
                    <label htmlFor="email" className="contact-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>
                <div className="contact-input-group-half">
                  <div className="contact-input-wrapper">
                    <label htmlFor="subject" className="contact-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>
                <div className="contact-input-group-full">
                  <div className="contact-input-wrapper">
                    <label htmlFor="message" className="contact-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="contact-textarea"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="contact-input-group-full">
                  <button type="submit" className="contact-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
