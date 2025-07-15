import { Renderer } from './Renderer';
import { Shape } from '../Base';
import { DATA } from '../../constants/data';
import { Fridge, FridgeInterface, WashingMachine, WashingMachineInterface } from '../appliance';
import { ApplianceType } from '../../constants/types';

export class Game {
    private renderer: Renderer;
    private shapes = [
        ...DATA.map((data) => {
            switch (data?.applianceType)
            {
                case (ApplianceType.WASHER): {
                    return new WashingMachine(data as WashingMachineInterface)

                }
                case (ApplianceType.FRIDGE): {
                    return new Fridge(data as FridgeInterface)
                }
                case (undefined): {
                    return new Shape(data)
                }
            }
        }),
    ];

    public init(): void {
        this.renderer = new Renderer(this.shapes);
        this.renderer.init();

        this.gameLoop();
    }

    private gameLoop(): void {
        // Update renders
        this.renderer.update();

        requestAnimationFrame(() => this.gameLoop());
    }
}
