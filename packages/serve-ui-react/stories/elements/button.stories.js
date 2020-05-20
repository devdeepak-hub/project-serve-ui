import React from 'react';

import centered from "@storybook/addon-centered/react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";

import { Button } from '@serve-ui/react';



export default {
  title: "Elements/Button",
  decorators: [centered, withA11y],
};

export const Basic = () => (
        <button>This is a button</button>
);

export const StyledButton = () => {
        return (
                <Button className="btn"></Button>
        );
}

