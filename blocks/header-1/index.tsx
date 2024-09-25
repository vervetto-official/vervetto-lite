import { Button } from "@/components/button";

export const Header1 = () => {
    return (
        <>
            <h1 className="bg-black">this is Header1</h1>
            <a href="#" className="bg-red-600">testing</a>
            <Button type="link" href="#" className="bg-[#50d71e]">Get Started!</Button>
        </>
    );
}