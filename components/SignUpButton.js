import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import SignUpForm from './SignUpForm'

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Login In to your account</Popover.Header>
        <Popover.Body>
          <SignUpForm />
        </Popover.Body>
    </Popover>
);

const SignUpButton = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button variant="primary">SignUp</Button>
    </OverlayTrigger>
);

export default SignUpButton;
