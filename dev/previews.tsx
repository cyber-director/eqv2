import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import About from "../components/about";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/About">
                <About/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;