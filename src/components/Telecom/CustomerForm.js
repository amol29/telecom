import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useTelecomContext } from './Context';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function CustomerForm({customer = {}}) {
  const {customers, addCustomer, editCustomer} = useTelecomContext();
  const [formValues, setFormValues]= useState(customer)
  const history = useHistory()

  const submit = (e) => {
    e.preventDefault()
    if(formValues.id) {
      editCustomer(customer.id, formValues)
      history.push('/')
    } else{ 
      const cId = customers.length + 1
      addCustomer({
        id: cId,
        ...formValues
      })

      history.push(`/edit/${cId}/plan`)
    }
  }

  const onChange = (e) => {
    setFormValues((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Container>
    <Form onSubmit={submit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control defaultValue={formValues['name']} onChange={onChange} name="name" type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control defaultValue={formValues['email']} onChange={onChange} name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDob">
          <Form.Label>DOB</Form.Label>
          <Form.Control defaultValue={formValues['dob']} onChange={onChange} name="dob" type="date" placeholder="DOB" required />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAdhar">
        <Form.Label>Adhar Number.(12 Digit)</Form.Label>
        <Form.Control defaultValue={formValues['adhar']} type="number" onChange={onChange} name="adhar" minLength={12} maxLength={12} placeholder="Adhar Number.(12 Digit)" required />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridRegistrationDate">
          <Form.Label>Registration Date</Form.Label>
          <Form.Control defaultValue={formValues['registrationDate']} type="date" onChange={onChange} name="registrationDate" placeholder="Registration Date" required />
        </Form.Group>
      <Form.Group as={Col} controlId="formGridMobile">
        <Form.Label>Assigned Mobile Number(10 Digit)</Form.Label>
        <Form.Control defaultValue={formValues['mobile']} type="number"  onChange={onChange} name="mobile" minLength={10} maxLength={10} placeholder="Assigned Mobile Number(10 Digit)" required />
      </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </Container>
  );
}

export default CustomerForm;