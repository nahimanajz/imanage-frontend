import { userInfo } from "../helpers/userInfo";
import {Dropdown} from 'react-bootstrap/Dropdown'

const DropDown = () => {
    return (
        <DropDown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{userInfo()['user'].name}</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Balance {userInfo()['user'].balance} </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </DropDown>
    )
}
export{ DropDown};