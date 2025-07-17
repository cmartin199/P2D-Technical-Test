import { colourPalette } from '../../constants/colourPalette';
import { UnitType } from '../../constants/types';
import { Shape } from '../Base';

export class Renderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(private shapes: Shape[]) {}

    public init(): void {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;

        if (!canvas) {
            throw new Error('canvas element has not loaded.');
        }

        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        if (!context) {
            throw new Error('2d context does not exist.');
        }

        this.canvas = canvas;
        this.context = context;
    }

    public update(): void {
        // Clear screen
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Redraw
        this.checkAllCollisions()
        this.draw();
    }
    
    private draw(): void {
        for (let shape of this.shapes) {
            shape.draw(this.context);
        }
    }
    
    private checkAllCollisions(): void {
        for (let currIndex=0; currIndex <this.shapes.length; currIndex ++) {
            if (this.shapes[currIndex].type === UnitType.OBSTRUCTION) continue   

            for (let targetIndex=1; targetIndex <this.shapes.length; targetIndex ++) {
            if (this.shapes[targetIndex].type !== UnitType.OBSTRUCTION) continue
                this.isOverlapping(this.shapes[currIndex], this.shapes[targetIndex]) && this.shapes[currIndex].setColour(colourPalette.collisionWarningRed)
            }
        }
    }

    private isOverlapping(shapeToBeDrawn: Shape, targetShape: Shape): boolean {
        const hasOverlap: boolean = !( 
            targetShape.position.x > (shapeToBeDrawn.position.x + shapeToBeDrawn.dimensions.width) || 
             (targetShape.position.x + targetShape.dimensions.width <  shapeToBeDrawn.position.x || 
              targetShape.position.z > (shapeToBeDrawn.position.z + shapeToBeDrawn.dimensions.depth) ||
             (targetShape.position.z + targetShape.dimensions.depth) <  shapeToBeDrawn.position.z));
            return hasOverlap
    }
}