import fs from "fs";
import http from "http";
import url from "url";
import { isUndefined } from "util";

// F1.: Készíts függvényt, ami meghatározza (visszatér) egy természetes szám számjegyeinek összegével! A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

function szamjegy(szam: number): number {
    let osszeg: number = 0;
    for (const i of szam.toString()) {
        if (i !== ".") {
            osszeg = osszeg + parseInt(i);
        }
    }
    return osszeg;
}

// F2.: Készíts függvényt, ami igaz értékkel tér vissza, ha egy számot maradék nélkül oszt el egy másik szám, hamissal ha nem osztja!
// A számot és az osztót paraméterekben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

function osztahtosag(osztando: number, oszto: number): boolean {
    return osztando % oszto == 0;
}
// F3.: Készíts függvényt, ami meghatározza egy szám osztóinak a darabszámát!  A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

function osztok(szamok: number): number {
    let osztoDB: number = 0;
    for (let oszto = 0; oszto <= szamok; oszto++) {
        if (szamok % oszto === 0) osztoDB++;
    }
    return osztoDB;
}

// F4.: Készíts függvényt, ami igaz értékkel tér vissza, ha a szám prím, hamissal, ha nem prím! A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

function prim(primek: number): boolean {
    if (primek % 1 != 0) {
        return false;
    }
    let osztoDB = 0;
    for (let oszto = 0; oszto <= primek; oszto++) {
        if (primek % oszto === 0) osztoDB++;
    }
    return osztoDB === 2;
}

// F5.: Készíts függvényt, amivel egy sugár paraméterből a kör kerületét tudod meghatározni!
// Ha az r paraméter r <= 0, vagy r = NaN, vagy r = undefined, akkor NaN értékkel térjen vissza!

function kerulet(r: number): number {
    if (isNaN(r) || isUndefined(r) || r <= 0) {
        return NaN;
    }
    return 2 * r * Math.PI;
}

// F6.: Készíts függvényt, amivel egy sugár paraméterből a kör területét tudod meghatározni!
// Ha az r paraméter r <= 0, vagy r = NaN, vagy r = undefined, akkor NaN értékkel térjen vissza!

function terulet(r: number): number {
    if (isNaN(r) || isUndefined(r) || r <= 0) {
        return NaN;
    }
    return Math.pow(r, 2) * Math.PI;
}

// F7.: Készíts függvényt, ami az "ax +  b = 0" egyenlet gyökét (x) határozza meg! A függvény paraméterei az "a" és "b" értéke legyen!
// A függvényt teszteljed tetszőleges hívással!

function gyok(a: number, b: number): number {
    return -b / a;
}

// F8.: Készíts függvényt két szám legnagyobb közös osztójának (LNKO) meghatározására!
// A függvény a két számot formális paraméteren keresztül kapja, visszatérési értéke LNKO(a,b)
// A függvényt teszteljed tetszőleges hívással!

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

// rekurzív megoldás: (a függvény saját magát hívja)
function LNKOrekurzív(a: number, b: number): number {
    if (a === 0) return b;
    if (b === 0) return a;
    if (a > b) {
        return LNKOrekurzív(a % b, b);
    } else {
        return LNKOrekurzív(a, b % a);
    }
}

// F9.: Készíts függvényt két szám legkisebb közös többszörösének (LKKT) meghatározására!
// A függvény a két számot formális paraméteren keresztül kapja, visszatérési értéke LKKT(a,b)
// A függvényt teszteljed tetszőleges hívással!

function LKKT(sz1: number, sz2: number): number {
    return (sz1 * sz2) / LNKO(sz1, sz2);
}

// LKKT hagyományos algoritmus
// a nagyobb szám olyan többszörösét keressük, melyet eloszt a kisebbik szám
function LKKThagyomámnyos(a: number, b: number): number {
    let nagyobbSzám;
    let kisebbSzám;
    if (a > b) {
        nagyobbSzám = a;
        kisebbSzám = b;
    } else {
        nagyobbSzám = b;
        kisebbSzám = a;
    }
    // Melyik nagyobb szám többszörösét osztja maradék nélkül a kisebbik szám
    let többszörös = nagyobbSzám; // "első" többszörös = nagyobbszám
    // Melyik nagyobbszám többszörösét osztja a kisebbik szám?
    while (többszörös % kisebbSzám !== 0) {
        többszörös += nagyobbSzám; // nagyobb szám többszörösei
    }
    return többszörös;
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
        res.write(`LNKOrekurzív(12,20) = ${LNKOrekurzív(12, 20)}\n`);
        res.write(`LKKT(7,13) = ${LKKT(7, 13)}\n`);
        res.write(`LKKThagyományos(7,13) = ${LKKThagyomámnyos(7, 13)}\n`);

        // String bejárása for-of ciklussal:
        for (const i of "alma") {
            // az "i" itt sztring típusú (nincs char típus JS/TS-ben)
            res.write(`${i}\n`);
        }

        // String bejárása for ciklussal:
        const szöveg: string = "körte";
        for (let i = 0; i < szöveg.length; i++) {
            res.write(`${szöveg[i]}\n`);
        }

        res.write(`Kör kerülete(33) = ${kerulet(33)}\n`);
        res.write(`Kör területe(12) = ${terulet(12)}\n`);

        res.write(`Számjegyek összege(123456) = ${szamjegy(123.456)}\n`);

        res.write(`Oszthatóság ellenőrzése(123, 456) = ${osztahtosag(123, 456)}\n`);

        res.write(`Gyökvonás(3, 5) = ${gyok(3, 5)}\n`);

        res.write(`Osztók száma(8) = ${osztok(8)}\n`);

        res.write(`Prímszám(17) = ${prim(17)}\n`);
        // Gy2.: Definiálj egy kör sugarát! Határozd meg a megadott sugarú kör kerületét és területét! (F5.-F6. függvények felhasználásával)

        const sugar: number = 67.45;
        res.write(`Az r=${sugar} kör területe és kerülete:`);
        res.write(`Kör kerülete: ${kerulet(sugar)}\n`);
        res.write(`Kör területe: ${terulet(sugar)}\n`);

        //Gy3.: Írd ki a kétjegyű prímszámokat!

        for (let i = 10; i <= 99; i++) {
            if (prim(i)) {
                res.write("Kétjegyű prímszámok \n");
                res.write(`${i}\n`);
            }
        }
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
