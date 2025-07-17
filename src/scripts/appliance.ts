import { colourPalette } from '../constants/colourPalette';
import { ApplianceType, FridgeType, LoadingType } from '../constants/types';
import { Shape, ShapeInterface } from './Base';

export interface ApplianceInterface extends ShapeInterface {
    applianceType: ApplianceType
}

export class Appliance extends Shape implements ApplianceInterface {
    applianceType: ApplianceType;
    
    constructor(appliance: ApplianceInterface) {
        super(appliance);
        this.applianceType = appliance.applianceType

        this.init();
    }

    private init() {            
        const overriddenColourMap = {
            [ApplianceType.WASHER]: colourPalette.units.appliances.washingMachine,
            [ApplianceType.FRIDGE]: colourPalette.units.appliances.fridge
        };
        super.setColour(overriddenColourMap[this.applianceType] || this.colour);
    }
}

export interface WashingMachineInterface extends ApplianceInterface {
    loadingType: LoadingType;
}

export class WashingMachine extends Appliance  implements WashingMachineInterface{
    loadingType: LoadingType;

    constructor(washingMachine: WashingMachineInterface) {
        super(washingMachine);
        this.loadingType = washingMachine.loadingType;
    }    
}

export interface FridgeInterface extends ApplianceInterface {
    fridgeType: FridgeType;
}

export class Fridge extends Appliance  implements FridgeInterface{
    fridgeType: FridgeType;

    constructor(fridge: FridgeInterface) {
        super(fridge);
        this.fridgeType = fridge.fridgeType;
    }    
}