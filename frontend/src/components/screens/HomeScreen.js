import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: var(--white);
`;

const MetricsContainer = styled.div`
    display: flex;
`;

const MetricContainer = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid orange;
    flex-grow: 1;
`;

const RPM = styled(MetricContainer)`
   
`;

const Speed = styled(MetricContainer)`

`;


const HomeScreen = () => {
    const [metrics, setMetrics] = useState({});

    useEffect(() => {
        fetch("http://127.0.0.1:5000/metrics")
            .then(response => response.json())
            .then(data => {
                console.log("DATA", data)
                setMetrics(data);
            })
    }, [])

    return (
        <Container>
            <MetricsContainer>
                <RPM>
                    RPM: {metrics['rpm']}
                </RPM>
                <Speed>
                    SPEED: {metrics['speed']}
                </Speed>
            </MetricsContainer>
        </Container>
    )
}

export default HomeScreen;