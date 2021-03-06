import React from "react";

import { storiesOf } from "@storybook/react";
import ButtonStory from "./ButtonStory";
import BasicCardsStory from "./BasicCardsStory";
import FooterStory from "./FooterStory";
import GridStory from "./GridStory";
import LoadingStory from "./LoadingStory";
import NavbarStory from "./NavbarStory";
import RichCardsStory from "./RichCardsStory";
import TextFieldsStory from "./TextFieldsStory";
import ToastStory from "./ToastStory";
import ImagesAndLinksStory from "./ImagesAndLinksStory";
// import { linkTo } from '@storybook/addon-links';

storiesOf("Button", module).add("Buttons", () => <ButtonStory />);
storiesOf("Card", module).add("Basic cards", () => <BasicCardsStory/>);
storiesOf("Card", module).add("Rich cards", () => <RichCardsStory/>);
storiesOf("Footer", module).add("Footer", () => <FooterStory />);
storiesOf("Grid", module).add("Grid", () => <GridStory />);
storiesOf("Images and links", module).add("Images and links", () => <ImagesAndLinksStory/>)
storiesOf("Loading", module).add("Loadings", () => <LoadingStory />);
storiesOf("Navbar", module).add("Navbars", () => <NavbarStory />);
storiesOf("Text Fields", module).add("TextField", () => <TextFieldsStory />);
storiesOf("Toast", module).add("Toasts", () => <ToastStory />);