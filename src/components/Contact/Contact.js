import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineEnvironment,
  AiOutlineSend,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Configuración de EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'alejandrosilvarodriguez9@gmail.com'
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setAlertType('success');
      setAlertMessage('¡Mensaje enviado correctamente! Te responderé pronto.');
      setShowAlert(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setAlertType('danger');
      setAlertMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo o contacta directamente por email.');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowAlert(false), 7000);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch </strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", fontSize: "1.2em" }}>
              Feel free to reach out if you want to collaborate or just have a chat!
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6}>
            <div className="contact-form">
              <h3 className="purple" style={{ marginBottom: "30px", textAlign: "center" }}>
                Send me a message
              </h3>
              
              {showAlert && (
                <Alert variant={alertType} className="text-center">
                  {alertMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="contact-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="contact-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="contact-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <AiOutlineSend /> &nbsp; Enviar Mensaje
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          <Col md={4} className="contact-info">
            <h3 className="purple" style={{ marginBottom: "30px", textAlign: "center" }}>
              Contact Information
            </h3>
            
            <div className="contact-item">
              <AiOutlineMail className="contact-icon" />
              <div>
                <h5>Email</h5>
                <p>alejandrosilvarodriguez9@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <AiOutlineEnvironment className="contact-icon" />
              <div>
                <h5>Location</h5>
                <p>Madrid, Spain</p>
              </div>
            </div>

            <div className="contact-item">
              <AiFillLinkedin className="contact-icon" />
              <div>
                <h5>LinkedIn</h5>
                <p>
                  <a 
                    href="https://www.linkedin.com/in/alejandro-silva-rodríguez-133293257" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Connect with me
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <AiFillGithub className="contact-icon" />
              <div>
                <h5>GitHub</h5>
                <p>
                  <a 
                    href="https://github.com/AlexSilvaa9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Check my repos
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
