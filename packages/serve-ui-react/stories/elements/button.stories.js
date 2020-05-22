import React from 'react';

import centered from "@storybook/addon-centered/react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";

import { Button } from '@serve-ui/react';

function handleClick() {
    console.log('Button is Clicked');
    action('button-click');
}

export default {
  title: "Elements/Button",
  decorators: [centered, withA11y],
};

export const Basic = () => (
        <button className="flat-btn" onClick={handleClick}>This is a button</button>
);

export const StyledButton = () => {
        return (
                <Button className="btn"></Button>
        );
}

export const FlatButton = () => {
    return (
        <Button className="btn-jumbo">Jumbo Flat Button</Button>
    );
}


