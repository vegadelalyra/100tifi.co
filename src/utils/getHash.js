const getHash = () => 
    location.hash           // #/1/rest/STUFF
    .slice(1)               // /1/rest/STUFF
    .toLocateLowerCase()    // /1/rest/stuff
    .split('/')[1] || '/'   // [, 1, , rest, , stuff] ...
                            // ... 1 || '/'
export default getHash