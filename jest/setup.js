jest.mock('VirtualizedList', () => {
  const RealComponent = require.requireActual('VirtualizedList');
  const React = require('React');
  class VirtualizedList extends React.Component {
    render() {
      delete this.props.getScrollableNode;
      return React.createElement('VirtualizedList', this.props, this.props.children);
    }
  }
  VirtualizedList.propTypes = RealComponent.propTypes;
  return VirtualizedList;
});

jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
}))
