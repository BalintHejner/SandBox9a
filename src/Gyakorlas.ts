import fs from "fs";
import http from "http";
import url from "url";

// F1.: Készíts függvényt, ami meghatározza (visszatér) egy szám számjegyeinek összegével! A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

// F2.: Készíts függvényt, ami igaz értékkel tér vissza, ha egy számot maradék nélkül oszt el egy másik szám, hamissal ha nem osztja!
// A számot és az osztót paraméterekben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

// F3.: Készíts függvényt, ami meghatározza egy szám osztóinak a darabszámát!  A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

// F4.: Készíts függvényt, ami igaz értékkel tér vissza, ha a szám prím, hamissal, ha nem prím! A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

// F5.: Készíts függvényt, amivel egy sugár paramétrből a kör kerületét tudod meghatározni!
// Ha az r paraméter r <= 0, vagy r = NaN, vagy r = undefined, akkor NaN értékkel térjen vissza!

// F6.: Készíts függvényt, amivel egy sugár paramétrből a kör területét tudod meghatározni!
// Ha az r paraméter r <= 0, vagy r = NaN, vagy r = undefined, akkor NaN értékkel térjen vissza!

// F7.: Készíts függvényt, ami az "ax +  b = 0" egyenlet gyökét (x) határozza meg! A függvény paraméterei az "a" és "b" értéke legyen!
// A függvényt teszteljed tetszőleges hívással!

// F8.: LNKO meghatározása
function LNKO(a: number, b: number): number {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

// F9.: LKKT
function LKKT(sz1: number, sz2: number): number {
    return (sz1 * sz2) / LNKO(sz1, sz2);
}
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

        // Gy1.: Készíts programot ami két szám legkisebb közös többszörösét (LKKT) határozza meg és írja ki!
        // Az algoritmust a neten megtalálod!
        res.write(`LNKO(12,20) = ${LNKO(12, 20)}\n`);
        res.write(`LKKT(7,13) = ${LKKT(7, 13)}\n`);

        for (const i of "alma") {
            res.write(`${i}\n`);
        }
        const szöveg: string = "körte";
        for (let i = 0; i < szöveg.length; i++) {
            res.write(`${szöveg[i]}\n`);
        }

        // Gy2.: Definiálj egy kör sugarát! Határozd meg a megadott sugarú kör kerületét és területét! (F5.-F6. függvények felhasználásával)

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
