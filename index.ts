import {OverpassBbox,OverpassWay,OverpassResponse,overpass, OverpassJson} from 'overpass-ts'
(async ()=> { 
    //nwr(around:10,45.500812,-122.644813);

    try {//45.500812,-122.644813 nwr(around:10,45.495654,-122.652869);

        let results: OverpassResponse = await overpass(
            "[out:json];nwr(around:10,45.500812,-122.644813);out body;");
        (results as OverpassJson).elements.forEach((lmn)=>{
            if (lmn?.type === "way") {
                if (lmn.tags !== undefined) {
                    //format addrsss
                    let addr = `${lmn.tags["addr:housenumber"]} ${lmn.tags["addr:street"]} ${lmn.tags["addr:city"]} ${lmn.tags["addr:postcode"]}`;
                    console.log(addr);                    
                }
            }
        })
    } catch(error) {
        console.error("problem: " + error)
    }
})();