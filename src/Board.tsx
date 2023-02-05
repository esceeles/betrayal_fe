import { mergeClasses } from './utils/utils'
// @ts-ignore
import React, { ReactElement } from 'react';
import {Tile} from "./Tile";



type BoardProps = {
    label: string;
};

export const Board = ({ label }: BoardProps): ReactElement => {
    return <div className={mergeClasses('cell', label)}></div>;
};