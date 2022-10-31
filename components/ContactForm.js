import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitting");
        var data = {
            subject: `bgdestroyer: ${subject} from ${name}`,
            text: `Email: ${email}\nText: ${text}`,
        };
        // This posts to a pipedream workflow
        axios
            .post(process.env.NEXT_PUBLIC_CONTACT_URL, data)
            .then((response) => {
                setSuccessMessage(
                    `Thanks for contacting me! Check your inbox for updates 😊`
                );
            })
            .catch((err) => console.error(err));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    type="text"
                    placeholder="Enter subject"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>What{"'"}s on your mind?</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    minLength={6}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {successMessage && (
                <Alert className="mt-3" variant="success">{successMessage}</Alert>
            )}
        </Form>
    );
}
