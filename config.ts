import { text } from "stream/consumers";

export const config = {
    navigationMenu: [
        {
            text: "Home",
            link: "/"
        },
        {
            hasChild: true,
            text: "Features",
            children: [
                {
                    text: "Hello",
                    link: "#"
                },
                {
                    text: "Hi",
                    link: "#"
                }
            ]
        },
        {
            text: "About",
            link: "/about"
        },
        {
            text: "Contact",
            link: "/contact"
        }
    ]
}