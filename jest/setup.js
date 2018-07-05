jest.mock('TextInput', () => {
  const RealComponent = require.requireActual('TextInput');
  const React = require('React');
  class TextInput extends React.Component {
    render() {
      delete this.props.autoFocus;
      return React.createElement('TextInput', this.props, this.props.children);
    }
  }
  TextInput.propTypes = RealComponent.propTypes;
  return TextInput;
});

jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
}))
