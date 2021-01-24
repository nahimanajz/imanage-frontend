import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Header from 'react-bootstrap/ModalBody';
import Button from 'react-bootstrap/Button';

export const Loading = () => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Popover right</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );

  return(<>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
    </>
);
}
    