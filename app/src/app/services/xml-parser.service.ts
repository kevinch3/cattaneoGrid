import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { XMLParser } from 'fast-xml-parser';

@Injectable({
  providedIn: 'root'
})
export class XmlParserService {
  // Mirrors the previous xml2js({ explicitArray: false }) shape: repeated child
  // elements become arrays, single occurrences stay plain objects, and element
  // attributes (e.g. <enclosure url="..."/>) are kept rather than dropped.
  private readonly parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

  constructor(
    private http: HttpClient
  ) {}

  fetchXml(url: string): Promise<any> {
    return this.http.get(url, { responseType: 'text' }).toPromise();
  }

  parse(xmlString: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.parser.parse(xmlString));
      } catch (err) {
        reject(err);
      }
    });
  }
}