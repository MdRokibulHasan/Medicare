import { useEffect, useState } from 'react';

const useMedicare = () => {
    const [values, setValues] = useState({});
    useEffect(() => {
        fetch('./medicare.json')
            .then(res => res.json())
            .then(data => setValues(data));
    }, [])

    return [values]
}
export default useMedicare;