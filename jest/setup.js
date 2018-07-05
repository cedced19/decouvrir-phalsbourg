jest.mock('TaskQueue', () => {
  const RealComponent = require.requireActual('TaskQueue');
  const React = require('React');
  class TaskQueue extends React.Component {
    render() {
      this.props.getHostNode = function () {}
      return React.createElement('TaskQueue', this.props, this.props.children);
    }
  }
  TaskQueue.propTypes = RealComponent.propTypes;
  return TaskQueue;
});

jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
}))
