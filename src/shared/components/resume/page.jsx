"use client"
import { useEffect, useState } from 'react'

function Resume() {
    const [state, setstate] = useState([]);
    const [data, setData] = useState();
    useEffect(() => {

        const fetchdata = async () => {
            const res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=526ad75264a03e430f8b5d27573eeebb&query=movies")
            const data = await res.json();
            console.log(data.results)
            console.table(data.results)
            setData(data.results[1])
            // setstate(data.results)
        }
        fetchdata();
    }, []);

    return (
        <div>

            {/* {state.map((data, index) => {

                return (
                    <>
                        <div key={index}>
                            {data.original_title}
                        </div>
                    </>
                )
            })} */}
            {data && <div>
                {data.original_title}
            </div>}
        </div >
    )

}

export default Resume
