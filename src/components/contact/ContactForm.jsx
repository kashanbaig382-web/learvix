"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);
        setStatus("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
        );

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
            />

            <input
                type="hidden"
                name="from_name"
                value="LEARVIX Contact Form"
            />

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Write your message..."
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className="primary-btn contact-submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="contact-status contact-success">
                    Thanks! Your message has been sent successfully.
                </p>
            )}

            {status === "error" && (
                <p className="contact-status contact-error">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}