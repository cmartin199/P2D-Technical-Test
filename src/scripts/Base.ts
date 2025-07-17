import { Dimensions, Position, UnitType } from '../constants/types';
import { Sprite } from './Sprite';

export interface ShapeInterface {
    type: UnitType;
    position: Position;
    dimensions: Dimensions;
    colour: string;
}
export class Shape implements ShapeInterface {
    type: UnitType;
    position: Position;
    dimensions: Dimensions;
    colour: string;

    private sprite: Sprite;

    constructor( config: ShapeInterface
    ) {
        this.type = config.type;
        this.position = config.position;
        this.dimensions = config.dimensions;
        this.colour = config.colour;
       
        this.sprite = new Sprite(this);
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position): void {
        this.position = position;
        this.sprite = new Sprite(this)
    }

    public getType(): UnitType {
        return this.type;
    }

    public getDimensions(): Dimensions {
        return this.dimensions;
    }

    public getColour(): string {
        return this.colour;
    }

    public setColour(colour: string): void {
        this.colour = colour;
        this.sprite = new Sprite(this)
    }

    public draw(context: CanvasRenderingContext2D): void {
        this.sprite.draw(context);
    }
}