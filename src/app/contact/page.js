import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact",
  description:
    "Contact LEARVIX for questions, feedback, corrections, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="contact-hero">
          <div className="container contact-container">
            <span className="section-label contact-label">Contact</span>

            <h1>Have a Question or Suggestion?</h1>

            <p>
              Send us your feedback, report an issue, suggest a useful AI tool,
              or get in touch about LEARVIX.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-grid">
            <div className="contact-info">
              <span>Get in Touch</span>

              <h2>We'd Love to Hear From You.</h2>

              <p>
                Whether you found an error in one of our guides, have a content
                suggestion, or simply want to say hello, you can send us a
                message using the form.
              </p>

              <div className="contact-note">
                <h3>Before You Send</h3>
                <p>
                  Please avoid sharing passwords, private documents, student
                  records, or other sensitive personal information.
                </p>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="primary-btn contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}