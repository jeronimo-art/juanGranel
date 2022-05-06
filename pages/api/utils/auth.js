import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
baseURL: 'http://localhost:3000',
    clientID: 'M1RF7N7RdDS2kpwaLH5sEkO3nXINFz2Y',
    secret: 'ee1hurEKIkkYRMJhe4zpc8Vhh8-CTY9hlkrSo7338GJ8m4fRfDNCXzSEf7z7rnvt',
    clientSecret: 'ee1hurEKIkkYRMJhe4zpc8Vhh8-CTY9hlkrSo7338GJ8m4fRfDNCXzSEf7z7rnvt',
    issuerBaseURL: 'https://dev-zzyukyep.us.auth0.com'
})