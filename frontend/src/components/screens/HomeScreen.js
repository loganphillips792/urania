import { useState, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
    color: var(--white);
`;

const MetricsContainer = styled.div`
    display: flex;
`;

const MetricContainer = styled.div`
    border: 2px solid orange;
    flex-grow: 1;
`;

const RPM = styled(MetricContainer)`
`;

const Speed = styled(MetricContainer)`
`;

const MetricName = styled.div`
    font-size: 100px;
    text-align: center;
`;

const Number = styled.div`
    font-size: 50px;
    text-align: center;
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
                    <MetricName>
                        RPM    
                    </MetricName> 
                    <Number>
                        {metrics['rpm']}
                    </Number>
                </RPM>
                <Speed>
                    <MetricName>
                        SPEED
                    </MetricName>
                     
                    <Number>
                        {metrics['speed']}
                    </Number>
                </Speed>
            </MetricsContainer>
        </Container>
    )
}

export default HomeScreen;