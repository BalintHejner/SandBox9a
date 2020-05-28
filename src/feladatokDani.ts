import fs from "fs";
import http from "http";
import url from "url";

/*
   F1: Készíts egy függvényt amely bekér egy számokból álló tömböt, majd visszaadja a számok
   átlagát!
 */

/*
  F2: Készíts egy függvényt ami fogad egy String típusú elemekből álló tömböt!
      Adja vissza a legrövidebb szót a tömbből!
 */

/*
   F3: Készíts egy függvényt ami fogad egy számot, és megmondja (true/false) hogy a szám egy egész számnak a négyzete-e.
       Pl.: 1 -> true; 3 -> false; 4 -> true
 */

/*
   F4: Készíts egy függvényt ami fogad két számot, és visszaadja az összes páros számot a kisebbik és a nagyobbik szám között
       egy tömbben! 
       Pl.: (1, 10)  -> [2, 4, 6, 8]; 
            (10, 20) -> [12, 14, 16, 18]; 
            (31, 20) -> [22, 24, 26, 28, 30];
*/

/*
   F5: Készíts egy függvényt amely fogad egy számokból álló tömböt, 
       és visszaadja a tömbben megtalálható legkisebb és a legnagyobb szám szorzatát!
       Pl.: ([10, 12, 20, 14]) -> 200 (mivel 10 * 20)
            ([1, 34, 10, -5]) -> -170 (mivel -5 * 34)
            ([12, 1, 40, 23]) -> 40 (mivel 1 * 40) 
*/

/*
   F6: Készíts egy függvényt amely bekéri egy háromszög 3 oldalának hosszát és visszaadja (true/false), hogy
       háromszög valóban szerkeszthető (a háromszög-egyenlőtlenség törvénye alapján).
       Pl.: (1, 2, 2) -> true
            (7, 2, 2) -> false
            (1, 2, 3) -> false
            (4, 2, 3) -> true
*/

/*
   F7: Készíts egy függvényt amely bekér egy stringet, és visszaadja annak a megfordított változatát!
       Pl.: ("Alma") -> amlA
 */

/*
   F8: Készíts egy függvényt ami fogad egy stringet, és visszaadja egy olyan változatát amiben minden karakter
       meg van duplázva!
       Pl.: ("Hello") -> "HHeelllloo"
            ("May") -> MMaayy
            ("hi") -> hhii  
*/

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>SandBox 9A</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->
        // <---- Fejezd be a kódolást
        res.write("</pre></form></body></html>");
        res.end();
    }
}
