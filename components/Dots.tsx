import React from "react";

type DotsProps = {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    color?: string;      // dot fill color
    blur?: string | number; // blur amount (e.g. "10px")
    width?: string | number;
    height?: string | number;
    bgColor?: string;    // background color behind the dot
};

const Dots: React.FC<DotsProps> = ({
                                       top,
                                       left,
                                       right,
                                       bottom,
                                       color = "#000",
                                       blur = "0px",
                                       width = "10px",
                                       height = "10px",
                                       bgColor = "transparent",
                                   }) => {
    return (
        <div
            style={{
                position: "absolute",
                top,
                left,
                right,
                bottom,
                width,
                height,
                backgroundColor: color || bgColor,
                borderRadius: "50%",
                filter: `blur(${blur})`,
            }}
        />
    );
};

export default Dots;
