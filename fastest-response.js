
let fetchList = [
    "http://www.yahoo.com",
    "http://www.google.com",
    "http://www.facebook.com",
    "http://www.duckduckgo.com"
]

const fetchFastestURL = async function urls(list) {
    console.log("Start fetching...");
    start = Date.now()
    responseList = list.map(url=>fetch(url));
    try{
        const resp = await Promise.race(responseList);
        console.log(`Fastest respnse came from: ${resp.url}.`);
        console.log(`It took: ${Date.now() - start} ms to fetch!`);
    }catch(err){
        console.error(`Error: ${err}`);
    }


};

fetchFastestURL(fetchList);
