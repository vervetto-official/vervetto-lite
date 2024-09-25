import { Button } from "@/components/button";

export const Header1 = () => {
    return (
        <>
            <h1 className="bg-black text-white p-3">this is Header1</h1>
            <Button type="link" href="#" className="bg-[#50d71e] p-3">Get Started!</Button>
        </>
    );
}