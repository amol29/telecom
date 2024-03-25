import React, { useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useParams,
} from "react-router-dom";
import {TelecomContextProvider, useTelecomContext} from './Context'
import CustomerHome from "./CustomerHome";
import { PlanData } from "./PlanData";
import CustomerForm from "./CustomerForm";
import PlanCard from "./PlanCard";
import { Button } from "react-bootstrap";

export default function Telecom() {
  return (
    <TelecomContextProvider>
    <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <CustomerHome />
            </Route>
            <Route path="/add">
              <CustomerForm />
            </Route>
            <Route exact path="/edit/:id">
              <EditUser />
            </Route>

            <Route path="/edit/:id/plan">
              <Plan />
            </Route>
          </Switch>
        </div>
    </Router>
  </TelecomContextProvider>
  );
}

function EditUser() {
  const {customers} = useTelecomContext()
  const {id} = useParams()
  const customer = useMemo(()=> customers.find((customer)=> customer.id == id),[id])
  return <CustomerForm customer={customer}/>
}

function Plan() {
  const {customers, changePlan} = useTelecomContext()
  const history = useHistory()
  const {id} = useParams()
  const customer = useMemo(()=> customers.find((customer)=> customer.id == id),[id])
  const [selectedPlan, setSelectedPlan] = useState(PlanData.find(({planName})=> customer?.planName === planName) || {})

  const onPlanClick = (plan)=> {
    setSelectedPlan(plan)
  }

  const savePlan = () => {
    changePlan(id, selectedPlan.planName, selectedPlan?.validity)
    history.push('/')
  }

  return <>
  <h2>Select Plan for {customer?.name}</h2>
    {PlanData.map((plan)=> <PlanCard selected={selectedPlan?.planName === plan.planName}  onClick={()=> onPlanClick(plan)} key={plan.planName} {...plan}/> )}
    <Button disabled={!selectedPlan?.planName} onClick={savePlan}>Save</Button>
  </>;
}
