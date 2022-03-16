import { ObjectId } from "mongodb";

export default class Game {
    constructor(public name: string, public price: number, public type: string, public id?: ObjectId) {}
}