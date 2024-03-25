import { useReducer } from "react";
import { addDays } from "../../helper";

const initialCustomer = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.customer)
    case "EDIT":
      return state.map((customer) => {
        if (customer.id == action.id) {
          return { ...customer, ...action.customer };
        } else {
          return customer;
        }
      });
    case "UPDATE_PLAN":
      return state.map((customer) => {
        if (customer.id == action.id) {
          return { ...customer, planName: action.planName, renewalDate: action.renewalDate };
        } else {
          return customer;
        }
      });
    default:
      return state;
  }
};

export default function useTelecom() {
  const [customers, dispatch] = useReducer(reducer, initialCustomer);
  const addCustomer = (customer) => {
    dispatch({type: 'ADD', customer})
  } 

  const editCustomer = (id, customer) => {
    dispatch({type: 'EDIT', id, customer})
  } 

  const changePlan = (id, planName, validity = {}) => {
    dispatch({
      type: 'UPDATE_PLAN', 
      id,
      planName,
      renewalDate: addDays(validity.noOfDays)
    })
  }

  

  return {
    customers,
    addCustomer,
    editCustomer,
    changePlan
  }
}