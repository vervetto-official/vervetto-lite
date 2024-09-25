import styles from "./button.module.css";

interface ButtonProps {
    className?: string,
    type?: "link" | "submit" | "button",
    visual?: "standard" | "styled",
    href?: string,
    children?: React.ReactNode
}

export const Button = ({className, type, visual, href, children}: ButtonProps) =>{
    switch (type) {
        case "link":
            return (
                <a href={href} className={className + ""}>{children}</a>
            );
            break;

        case "submit":
            
            break;

        case "button":
            
            break;

        default:
            break;
    }
}