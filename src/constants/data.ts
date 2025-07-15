import { ApplianceType, FridgeType, LoadingType, ShapeConfig, UnitType } from './types';
import { colourPalette } from './colourPalette';

export const BASE_UNITS: ShapeConfig[] = [
    {
        id: 1,
        position: {
            x: 250,
            z: 250,
        },
        type: UnitType.BASE,
        dimensions: {
            width: 100,
            depth: 150,
        },
        colour: colourPalette.units.baseUnit,
    },
    {
        id: 2,
        position: {
            x: 550,
            z: 500,
        },
        type: UnitType.BASE,
        dimensions: {
            width: 70,
            depth: 100,
        },
        colour: colourPalette.units.baseUnit,
    },
];


export const OBSTRUCTIONS: ShapeConfig[] = [
    {
        id: 4,
        position: {
            x: 270,
            z: 250,
        },
        type: UnitType.OBSTRUCTION,
        dimensions: {
            width: 100,
            depth: 60,
        },
        colour: colourPalette.units.obstruction,
    },
];

export const APPLIANCES: ShapeConfig[] = [
    {
        id: 5,
        position: {
            x: 470,
            z: 250,
        },
        type: UnitType.APPLIANCE,
        dimensions: {
            width: 100,
            depth: 60,
        },
        colour: colourPalette.units.baseUnit,
        applianceType: ApplianceType.WASHER,
        loadingType: LoadingType.FRONT
    },
    {
        id: 5,
        position: {
            x: 470,
            z: 400,
        },
        type: UnitType.APPLIANCE,
        dimensions: {
            width: 100,
            depth: 60,
        },
        colour: colourPalette.units.baseUnit,
        applianceType: ApplianceType.FRIDGE,
        fridgeType: FridgeType.FRIDGE
    }
];
export const DATA: ShapeConfig[] = [
    ...BASE_UNITS,
    ...OBSTRUCTIONS, 
    ...APPLIANCES,
];
