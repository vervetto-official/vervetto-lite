import { Button } from "@/components/button";

export const Header1 = () => {
    return (
        <>
            <h1 className="bg-black text-white p-3 mb-7">this is Header1</h1>
            <Button type="button" visual="styled" href="#">Get Started!</Button>
            <Button type="button" href="#">Get Started!</Button>
            <Button type="link" href="#" className="mt-7">Get Started!</Button>
        </>
    );
}