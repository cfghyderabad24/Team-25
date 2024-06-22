import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

const ExpertGuidances = () => {
  const [guidances, setGuidances] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('http://localhost:8081/api/expert-guidances')
      .then((response) => {
        setGuidances(response.data);
      })
      .catch((error) => {
        console.error('Error fetching expert guidances:', error);
      });
  }, []);

  return (
    <div>
        <Navigation/>
    <Container className="mt-5">
      <Button variant="primary" className="mb-4" onClick={() => navigate('/raise-request')}>
        Raise New Request
      </Button>
      <Row>
        {guidances.length > 0 ? (
          guidances.map((guidance) => (
            <Col md={4} key={guidance._id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={guidance.image} alt="Problem Image" />
                <Card.Body>
                  <Card.Title>{guidance.description}</Card.Title>
                  <Card.Text>
                    {guidance.solution ? (
                      <div>
                        <strong>Solution:</strong> {guidance.solution}
                      </div>
                    ) : (
                      <div><strong>Solution:</strong> Pending</div>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div>No expert guidances available</div>
        )}
      </Row>
    </Container>
    </div>
  );
};

export default ExpertGuidances;
