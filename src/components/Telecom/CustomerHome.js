import { useTelecomContext } from "./Context";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Table from "../Table";
import { Link } from "react-router-dom";
import { getTimeStampFromDate } from "../../helper";

const headers = ['id', 'name', 'email', 'dob', 'adhar', 'registrationDate', 'mobile', 'planName', 'renewalDate', 'status','']

export default function CustomerHome() {
  const {customers = []} = useTelecomContext()
  return <Container>
    <Stack gap={3}>
      <div>
      <Link to='/add'>
      <Button variant="primary">
        Add New customer
      </Button>
      </Link>
      </div>
    <Table headers={headers} data={customers} 
      renderItem={(dataItem)=> headers.map((item, idx)=> <TableItem key={idx} item={item} id={dataItem.id} dataItem={dataItem}/>)}
    />
    </Stack>
  </Container>;
}

const TableItem = ({item, dataItem, id})=> {
  if(!item) {
    const renewalDate = getTimeStampFromDate(dataItem['renewalDate']);
    return <td>
      <Link to={`/edit/${id}/plan`}>
        {renewalDate && renewalDate < Date.now() ? 'Renew' : dataItem['planName'] ? 'Edit': 'Add'} Plan
      </Link>
      &nbsp;&nbsp;
      <Link to={`/edit/${id}`}>
        Edit User Details
      </Link>
    </td>
  }

  if(item === 'status' && dataItem['renewalDate']) {
    const renewalDate = getTimeStampFromDate(dataItem['renewalDate']);
    return <td>{renewalDate < Date.now() ? 'Inactive': 'Active'}</td>
  }
  return <td>{dataItem[item] || '--'}</td>
}