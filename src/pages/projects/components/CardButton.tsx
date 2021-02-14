import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const CardButton = withStyles({
  label: {
    fontFamily: 'Poppins',
    fontSize: '1.1rem',
    fontWeight: 400,
    textTransform: 'capitalize'
  },
})(Button);

export default CardButton;