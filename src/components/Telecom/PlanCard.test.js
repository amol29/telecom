import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlanCard from './PlanCard';

describe('PlanCard component', () => {
  const planData = {
    planName: 'Platinum365',
    planCost: 499,
    validity: {
      noOfDays: 365
    },
    planStatus: 'Active'
  };

  it('renders correctly with the given props', () => {
    const { getByText } = render(
      <PlanCard
        planName={planData.planName}
        planCost={planData.planCost}
        validity={planData.validity}
        selected={false}
        onClick={() => {}}
      />
    );

    expect(getByText('Platinum365')).toBeInTheDocument();
    expect(getByText('Price: 499 Rs')).toBeInTheDocument();
    expect(getByText('Validity: 365 Days')).toBeInTheDocument();
  });

  it('displays "Selected" badge when selected prop is true', () => {
    const { getByText } = render(
      <PlanCard
        planName={planData.planName}
        planCost={planData.planCost}
        validity={planData.validity}
        selected={true}
        onClick={() => {}}
      />
    );

    expect(getByText('Selected')).toBeInTheDocument();
  });

  it('triggers onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <PlanCard
        planName={planData.planName}
        planCost={planData.planCost}
        validity={planData.validity}
        selected={false}
        onClick={onClickMock}
      />
    );

    fireEvent.click(container.firstChild);
    expect(onClickMock).toHaveBeenCalled();
  });
});