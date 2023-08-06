'use client';

import { useEffect } from 'react';
import * as FathomClient from 'fathom-client';

export default function Fathom() {
    useEffect(() => {
        // Initialize Fathom when the app loads
        // Example: yourdomain.com
        //  - Do not include https://
        //  - This must be an exact match of your domain.
        //  - If you're using www. for your domain, make sure you include that here.
        FathomClient.load('HJJBYJNJ', {
            includedDomains: ['prompttokencounter.com', 'www.prompttokencounter.com'],
        });

        FathomClient.trackPageview();
    }, []);
}
