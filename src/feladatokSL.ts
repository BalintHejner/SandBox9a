import fs from "fs";
import http from "http";
import url from "url";

// Feladatok
// F1.: Írjon függvényt, amely paraméterben kapja egy háromszög 3 oldalát és visszaadja annak kerületét!
// F2.: Írjon függvényt, amely paraméterben kapja egy háromszög 3 oldalát és visszaadja annak területét! (Ehhez nézzen utána a Héron-képletnek!)
// F3.: Írjon függvényt, amely paraméterben egy számokat tartalmazó vektort kap és visszaadja a számok átlagát!
// F4.: Írjon függvényt, amely paraméterben egy számokat tartalmazó vektort kap és logikai értékkel (boolean) tér vissza, amely true ha van a számok között negatív szám és false ha nincs!
// F5.: Írjon függvényt, amely paraméterben egy sztingeket tartalmazó vektort kap, és kiírja a vektor elemeit egymás alá!
// F6.: Írjon függvényt, amely paraméterben két téglalap a és b oldálát kapja, és true értékkel tér vissza ha a két téglalap hasonló, false-szal ha nem! (Két téglalap hasonló, ha az oldalaik aránya egyenlő.)
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
