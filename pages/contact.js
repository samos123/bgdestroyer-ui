import ContactForm from "../components/ContactForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Contact() {
    return (
        <Container>
            <Row>
                <Col lg={6} xs={12} className="my-auto text-center">
                    <h3>Get in touch</h3>
                    <p>
                        Do you have any questions? or feedback you want to share?<br/>
                        Fill out the form to sent an email to the creator of
                        bgdestroyer.com
                    </p>
                </Col>
                <Col lg={6} xs={12}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}
