import React, { useEffect, useState } from 'react';
import { getMalibourneTours } from '../../services/api/tours';

import TourItem from './../TourItem/TourItem';

function ToursView() {
    const [toursList, setToursList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTours = async () => {
            const result = await getMalibourneTours();
            setToursList(result.results)
            setIsLoading(false)
        };
        fetchTours();
    }, [])


    function renderMalbourneTours() {
        if (isLoading) {
            return [...Array(9)].map((x, i) =>
                // <Col key={i} md="4">
                <TourItem loading />
                // </Col>
            )
        } else if (toursList.length) {
            return toursList.map(tour =>
                // <Col key={tour.id} md="4">
                <TourItem tour={tour} />
                // </Col>
            )
        }

        return "Not tours found. Please comeback later. :-("
    }


    return (
        <div>
            <aside>

            </aside>

            <section>
                {renderMalbourneTours()}
            </section>
        </div>
    )
}

export default ToursView;