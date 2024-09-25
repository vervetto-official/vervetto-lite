import Image from 'next/image'

export default function ForgotPassword() {
    return (
        <>
            <div className="container w-full">
                <div className="w-2/5">
                    <Image
                        src="app\ui\PatternIllustration.svg"
                        width={500}
                        height={700}
                        alt="illustration"
                    />
                </div>
                <div className="w-3/5">
                    Signin Component
                </div>
            </div>
        </>
    );
}