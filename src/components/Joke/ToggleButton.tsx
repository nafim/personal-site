import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const ToggleButton = withStyles({
  label: {
    fontFamily: 'Raleway',
    fontSize: '1.2rem',
    fontWeight: 500,
    textTransform: 'capitalize'
  },
})(Button);

export default ToggleButton;