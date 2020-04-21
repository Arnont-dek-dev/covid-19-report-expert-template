import VMAP from 'vmap';
 
// Fetch VMAP as XML
const xhr = new XMLHttpRequest();
xhr.open('GET', vmapURL);
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            // Get a parsed VMAP object
            const vmap = new VMAP(xhr.responseXML);
        }
    }
};