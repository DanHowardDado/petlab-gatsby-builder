import React, { useState } from "react"
import {
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem
} from './styles'


const HamburgerLink = ({ data }) => {

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
            {/* <DropDownHeader onClick={toggling}>
                {data.title}
            </DropDownHeader>
            {
                isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {data.sublinks.map(option => (
                                <ListItem onClick={onOptionClicked(option)} to={option} key={Math.random()}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )
            } */}
        </>
    );
}

export default HamburgerLink

