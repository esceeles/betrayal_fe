import fetch from 'node-fetch';
import React  from 'react';
import {TileProps} from "./Tile";

const server = "localhost:8000"

export async function DrawTile(): Promise<TileProps> {
    const response = await fetch(`${server}/drawTile`)
    const data = await response.json();
    return data as TileProps;
}