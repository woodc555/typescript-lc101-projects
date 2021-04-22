export class Cargo implements Payload{
    massKg: number;
    material: string;

    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }
};

import {Payload} from './Payload';