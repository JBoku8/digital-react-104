import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render correctly', () => {
    const props = {
      text: 'Button',
      type: 'button',
    };
    const component = render(<Button {...props} />);

    const element = component.getByText(props.text);
    // expect(element).toBeInTheDocument();
    expect(element.getAttribute('type')).toEqual(props.type);
  });

  it('should call the onClick handler', () => {
    const props = {
      text: 'Button',
      type: 'button',
      onClick: jest.fn(),
    };
    const component = render(<Button {...props} />);

    const element = component.getByText(props.text);
    fireEvent.click(element);

    expect(element.hasAttribute('disabled')).toBeFalsy();
    expect(props.onClick).toBeCalledTimes(1);
  });

  it('should render the disabled button, onClick is not called', () => {
    const props = {
      text: 'Button',
      type: 'button',
      disabled: true,
      onClick: jest.fn(),
    };
    const component = render(<Button {...props} />);

    const element = component.getByText(props.text);
    fireEvent.click(element);

    expect(element.hasAttribute('disabled')).toBeTruthy();
    expect(props.onClick).toBeCalledTimes(0);
  });
});

describe('<Button /> snapshots', () => {
  it('snap 1', () => {
    const props = {
      text: 'Button',
      type: 'button',
    };
    const component = render(<Button {...props} />);
    expect(component).toMatchSnapshot();
  });
});
