import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

export default function ShorturlRedirect() {
    const { urlCode } = useParams();
    const serverBaseUrl = import.meta.env.VITE_APP_URI;

    const redirect = () => {
        const url = `${serverBaseUrl}/${urlCode}`;
        window.location.replace(url);
    };

    useEffect(() => {
        if (urlCode) {
            redirect();
        }
    }, [urlCode]);

    return (
        <div>
            <Heading as="h3" size="xl" m="3% 0% 2% 0%">
                Redirecting...
            </Heading>
        </div>
    );
}
