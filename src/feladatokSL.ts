import fs from "fs";
import http from "http";
import url from "url";

// Feladatok
// F1.: Írjon függvényt, amely paraméterben kapja egy háromszög 3 oldalát és visszaadja annak kerületét!

function haromszog(a: number, b: number, c: number): number {
    return a + b + c;
}

// F2.: Írjon függvényt, amely paraméterben kapja egy háromszög 3 oldalát és visszaadja annak területét! (Ehhez nézzen utána a Héron-képletnek!)

function haromszogter(a: number, b: number, c: number): number {
    const s: number = 5;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// F3.: Írjon függvényt, amely paraméterben egy számokat tartalmazó vektort kap és visszaadja a számok átlagát!

function atlag(szamok: number[]): number {
    let sum: number = 0;
    for (const i of szamok) {
        sum = sum + i;
    }
    return sum / szamok.length;
}

// F4.: Írjon függvényt, amely paraméterben egy számokat tartalmazó vektort kap és logikai értékkel (boolean) tér vissza, amely true ha van a számok között negatív szám és false ha nincs!

function negativ(vektor: number[]): boolean {
    for (const g of vektor) {
        if (g < 0) {
            return true;
        }
    }
    return false;
}

// F5.: Írjon függvényt, amely paraméterben egy sztingeket tartalmazó vektort kap, és kiírja a vektor elemeit egymás alá!

function iras(szavak: string[]): string {
    let szting: string = "";
    for (const h of szavak) {
        szting = szting + h;
    }
    return szting;
}

// F6.: Írjon függvényt, amely paraméterben két téglalap a és b oldálát kapja, és true értékkel tér vissza ha a két téglalap hasonló, false-szal ha nem! (Két téglalap hasonló, ha az oldalaik aránya egyenlő.)

function teglalap(a: number, b: number, c: number, d: number): boolean {
    return a / b == c / d;
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
        ("<!DOCTYPE html>");
        ("<html lang='hu'>");
        ("<head>");
        ("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        ("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        ("<title>SandBox 9A</title>");
        ("</head>");
        ("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->

        res.write(`A háromszög kerülete: ${haromszog(4, 2, 97)} + \n`);

        res.write(`A háromszög területe: ${haromszogter(9, 6, 3)} + \n`);

        res.write(`Átlagaik: ${atlag([245, 13, 924])} + \n`);

        res.write(`Van negatív? ${negativ([-58, 5, 84])} + \n`);

        res.write(`Elemek: ${iras(["Egy", "Bodza", "Megszentségteleníthetetlenségeskedéseitekért", "Korona"])} + \n`);

        res.write(`Téglalap: ${teglalap}`);

        // <---- Fejezd be a kódolást

        ("</pre></form></body></html>");
        res.end();
    }
}
