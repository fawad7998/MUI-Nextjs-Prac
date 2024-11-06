"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react'

function Resume() {
    const [data, setData] = useState([]);
    const [failed, setFailed] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchData = async (num) => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=526ad75264a03e430f8b5d27573eeebb&query=movies&page=${num}`);
            const result = await res.json();
            if (result.results && result.results.length > 0) {
                console.dir(result.results);
                setData((prevData) => {
                    const newData = [...prevData, ...result.results];
                    localStorage.setItem("movies", JSON.stringify(newData));
                    return newData;
                });
                setFailed("");
            } else {
                throw new Error("No results found");
            }
        } catch (error) {
            console.log("Data not fetched");
            setFailed("New Movies Not Found Getting the Movies from LocalStorage");
            const savedMovies = localStorage.getItem("movies");
            if (savedMovies) {
                setData(JSON.parse(savedMovies));
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-4">
            {failed && <center className='font-bold text-2xl text-red-500 mb-4'>{failed}</center>}
            {data.length === 0 ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((movie ,key) => (
                        <div key={key} className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h1 className="text-xl font-semibold mb-2">{movie.original_title}</h1>
                            <p className="text-sm mb-4">{movie.overview}</p>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                width={100}
                                height={100}
                                alt={movie.original_title}
                                className="rounded"
                            />
                        </div>
                    ))}
                </div>
            )}
            <center>
                {!loading && (
                    <button
                        onClick={() => setPage(page + 1)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Load More
                    </button>
                )}
                {loading && <p className="text-center">Loading more...</p>}
            </center>
        </div>
    )
}

export default Resume






{/* {data && <div>
    {data.original_title}
</div>} */}

{/* <div>
    {data ? <div>{data.original_title}</div> : <p>Loading...</p>}
</div> */}

// IIFE
    // (async () => {
    //     if (!data) { 
    //         const res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=526ad75264a03e430f8b5d27573eeebb&query=movies");
    //         const fetchedData = await res.json();
    //         setData(fetchedData.results[2]); 
    //         console.log(fetchedData.results[2]);
    //         localStorage.setItem("movie",fetchedData.results[1])
    //     }
    // })();
