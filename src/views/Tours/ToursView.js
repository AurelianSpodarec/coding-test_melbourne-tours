import React, { useEffect, useState } from 'react';
import { getMalibourneTours } from '../../services/api/tours';



function ToursView() {
    const [tours, setTours] = useState([])

    // fetch = async () => {
    //     const res = await fetch('https://www.triposo.com/api/20190906/tour.json', {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-Triposo-Account": "FV5UZZR2",
    //             "X-Triposo-Token": "0v4hgiq3zyo304rc0p3kfkh19zd224lu"
    //         }
    //     })
    //     console.log("PO", res)
    // }

    useEffect(() => {
        const fetchTours = async () => {
            const result = await getMalibourneTours();
            setTours(result.results)
        };
        fetchTours();
    }, [])
    console.log(tours)

    return (
        <div>
            Tours
        </div>
    )
}

export default ToursView;