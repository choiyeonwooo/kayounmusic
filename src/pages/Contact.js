import { Col, Container, Row } from "react-bootstrap";
import ContactDescription from "../components/contact/ContactDescription";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";

function Contact() {
  return (
    <>
      <Header />
      <TopBanner title="Contact" subtitle="Feel free to get in touch for any enquiries." />
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <ContactDescription />
          </Col>
          <Col md={6} sm={12}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
