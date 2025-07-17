
export enum UnitType {
    BASE = 'Base',
    APPLIANCE = 'Appliance',
    OBSTRUCTION = 'Obstruction',
}

export enum ApplianceType {
    WASHER = 'Washer',
    FRIDGE = 'Fridge',
}

export enum FridgeType {
    FRIDGE = 'Fridge',
    FRIDGEFREEZER = 'Fridge / Freezer'
}

export enum LoadingType {
    FRONT = 'Front Load',
    TOP = 'Top Load',
}
export interface Position {
    x: number;
    z: number;
}

export interface Dimensions {
    width: number;
    depth: number;
}


export interface ShapeConfig {
    id: number;
    type: UnitType;
    position: Position;
    dimensions: Dimensions;
    colour: string;
    applianceType?: ApplianceType;
    fridgeType?: FridgeType;
    loadingType?: LoadingType
}