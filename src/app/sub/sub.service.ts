import { Injectable } from '@angular/core';

@Injectable()
export class SubService {

    constructor() { }

    add(a: number, b: number): number {
        return a + b;
    }

}