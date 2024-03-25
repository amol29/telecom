import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
//     {
//       "planName": "Platinum365",
//       "planCost": 499,
//       "validity": {
//         "noOfDays": 365
//       },
//       "planStatus": "Active"
//     }

function PlanCard({planName, planCost, validity, selected, onClick}) {
  return (
    <Card onClick={onClick} border={selected ? 'primary':''} 
    style={{ width: '18rem', marginBottom: 10 }}>
      <Card.Body>
        <Card.Title>{planName} <Badge bg="primary">{selected && 'Selected'}</Badge></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Price: {planCost} Rs</Card.Subtitle>
        <Card.Text>
          Validity: {validity.noOfDays} Days
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlanCard;