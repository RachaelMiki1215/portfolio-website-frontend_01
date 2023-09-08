import profileImg01 from "@/../public/img/RachaelBuxton_ProfilePic_01.png";
import profileImg02 from "@/../public/img/RachaelBuxton_ProfilePic_02.jpg";
import profileImg03 from "@/../public/img/RachaelBuxton_ProfilePic_03.jpg";
import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

type profilePicType = {
    image: string | StaticImageData;
    caption: string;
    style?: CSSProperties;
}

export const profilePicArr: profilePicType[] = [
    {
        image: profileImg01,
        caption: "My latest portrait on LinkedIn"
    },
    {
        image: profileImg02,
        caption: "A random side profile",
        style: {filter: "contrast(1.2)"}
    },
    {
        image: profileImg03,
        caption: "Spoiling my sugar-deprived self",
        style: {filter: "contrast(1.3)"}
    }
]