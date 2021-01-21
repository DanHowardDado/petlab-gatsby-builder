import React, { useRef } from "react"
import { useDetectOutsideClick } from "../useDetectOutsideClick/index";
import {
    DropdownContainer,
    ToggleBtn,
    Menu,
    List,
    ListItem
} from './styles'


const DropdownItem = ({ name, routeList }) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
        <div>
            <DropdownContainer>
                <ToggleBtn onClick={onClick}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                >
                    {name}
                </ToggleBtn>
                <Menu onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} ref={dropdownRef} className={`${isActive ? "active" : "inactive"}`}>
                    {routeList.map(listItem =>
                        <List>
                            <ListItem to={listItem.link}>
                                {listItem.text}
                            </ListItem>
                        </List>
                    )}
                </Menu>
            </DropdownContainer>
        </div>

    );
}

export default DropdownItem
