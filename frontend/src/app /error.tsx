'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
    }, [error]);
    return (
        <>
            <div className="tp-error-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="tp-error-wrapper text-center">
                                <div className="tp-error-thumb mb-50">
                                    <Image width={650} height={400} src="/assets/img/error/fixing-bugs.png" alt="error-img" style={{ height: "auto" }} />
                                </div>
                                <div className="tp-error-content">
                                    <h4 className="tp-error-title-sm">Something went Wrong...</h4>
                                    <p>{error?.message}</p>
                                    <button onClick={() => reset()} className="tp-header-btn">Try again</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}