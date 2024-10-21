import styles from "./button.module.css";

interface ButtonProps {
    className?: string,
    type?: "link" | "submit" | "button",
    visual?: "standard" | "styled",
    href?: string,
    children?: React.ReactNode
}

export const Button = ({className = "", type, visual = "standard", href, children}: ButtonProps) =>{
    switch (type) {
        case "link":
            return (
                <a href={href} className={className + " " + styles.link}>{children}</a>
            );
            break;

        case "submit":
            
            break;

        case "button":
            if (visual == "styled") {
                return (
                    <a href={href} className={className + " " + "bg-[#2B3964] before:bg-[#4285F4] text-[#FBFBFB] text-xl py-[22px] px-[38px] rounded-md before:rounded-md " + styles.button + " " + styles.styled }>{children}</a>
                );
            }
            else {
                return (
                    <a href={href} className={className + " " + "bg-[#2B3964] hover:bg-[#394A7D] duration-500 text-[#FBFBFB] text-base py-2 px-10 rounded-md " + styles.button + " " + styles.standard }>{children}</a>
                );
            }
            break;

        default:
            break;
    }
}