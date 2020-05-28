import fs from "fs";
import http from "http";
import url from "url";

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

        //F1---> Cenzúra program, függvény mely paraméterben kapja meg a cenzúrázni kívánt mondatot, a kicenzúrázadnó szót, és azt a szót amire ki szeretnénk cserélni.
        //Segítség: A kicserélését a stringeknek a .replace() -val lehet megoldani.

        //F2 ---> Készíts egy programot, mely pozitív egész számok gyökét számolja és ha a gyök nem egész, kerekítse 2 tizedesjegyre. Teszteld a működését!

        //Függvények, órai vázlat

        function pow(num: number): boolean {
            return Number.isInteger(Math.sqrt(num));
        }

        function getRange(start: number, end: number): number[] {
            if (start > end) {
                const temp: number = end;
                end = start;
                start = temp;
            }

            const numbers: number[] = [];
            for (let i = start; i < end; i++) {
                if (i % 2 == 0) {
                    numbers[numbers.length] = i;
                }
            }
            return numbers;
        }

        function getMinMax(numbers: number[]): number {
            let min: number = numbers[0];
            let max: number = numbers[0];

            for (const num of numbers) {
                if (num < min) min = num;
                if (num > max) max = num;
            }
            return min * max;
        }

        function reverse(text: string): string {
            let result: string = "";
            for (let i = text.length - 1; i >= 0; i--) {
                result += text[i];
            }
            return result;
        }

        function charDuplicate(text: string): string {
            let result: string = "";
            for (const char of text) {
                result += char.repeat;
            }
            return result;
        }

        function censor(text: string, toReplace: string, newWord: string): string {
            while (text.includes(toReplace)) {
                text = text.replace(toReplace, newWord);
            }
            return text;
        }

        function printString(array: string[]): string {
            let result: string = "";
            for (const string of array) {
                result += string + "\n";
            }
            return result;
        }

        function isNegative(numbers: number[]): boolean {
            for (const num of numbers) {
                if (num < 0) return true;
            }
            return false;
        }
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}