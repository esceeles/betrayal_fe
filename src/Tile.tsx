import { mergeClasses } from './utils/utils'
// @ts-ignore
import React, { ReactElement } from 'react';

export interface TileProps {
    RoomName: string

    Top:    WallAttribute
    Right:  WallAttribute
    Left:   WallAttribute
    Bottom: WallAttribute

    SpecialCard: SpecialCard
}

export enum WallAttribute {
    Wall = "wall",
    Window= "window",
    Door = "door"
}

export enum SpecialCard {
    Omen = "omen",
    Item = "item",
    Event = "event"
}
export const Tile = ({RoomName, Top, Right, Left, Bottom, SpecialCard}: TileProps): ReactElement => {
    return <div className={mergeClasses('h-40 w-40 border-2 bg-orange-300 border-amber-900 text-white')}/>;
};