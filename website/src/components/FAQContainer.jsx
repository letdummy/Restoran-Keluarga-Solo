import * as React from 'react';



import FAQ from './FAQ';


export default function FAQContainer() {
    const [faq, setFaq] = React.useState([]);

    React.useEffect(() => {
        fetch('https://restorankeluarga-solo.up.railway.app/api/faq/')
        .then(response => response.json())
        .then(data => setFaq(data))
    }, [])

    return (
        <div>
        {faq.map((faq) => (
            <FAQ {...faq}/>
        ))}
        </div>
    );
}
