"use client"
import { useState, useEffect } from "react";

function Prac() {
    const [state, setState] = useState("");

    const Users = {
        nam: 'Fawad',
        company: "null",
        social: {
            twitter: {
                handle: "@Fawad."
            }
        }
    };

    useEffect(() => {
        const abc = Users?.social?.twitter?.handle ?? "No Twitter handle Found";
        setState(abc);
    }, []);

    return (
        <>
            <div>{state}</div>
        </>
    );
}

export default Prac;