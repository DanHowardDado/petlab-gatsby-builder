import React, { useState } from "react"
import {
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem
} from './styles'


const HamburgerLink = ({ name, routeList }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        console.log(window.innerWidth);
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <>
            <DropDownHeader onClick={toggling}>
                {name}
            </DropDownHeader>
            {
                isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {routeList.map(listItem => (
                                <ListItem onClick={onOptionClicked(listItem)} to={listItem.link} key={Math.random()}>
                                    {listItem.text}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )
            }
        </>
    );
}

export default HamburgerLink

