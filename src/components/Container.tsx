/**
 * filename: Container
 * overview: 整个拖拽演示界面
 */

import React, { useState } from 'react';
import Box from './Box';
import IListData from '../interface/ListData';
import List from './List';

// const boxs: IListData[] = [
//     { id: 1, category: 'Apple', bg: 'red' },
//     { id: 2, category: 'Banana', bg: 'yellow' },
//     { id: 3, category: 'Orange', bg: 'orange', type: "card"},
//     { id: 4, category: 'Grape', bg: 'purple', type: "card" },
//     { id: 5, category: 'Watermelon', bg: 'green', type: "card" },
//     { id: 6, category: 'Peach', bg: 'pink', type: "card" },
// ]

interface IListDataa1 {
    id: number;
    category: string;
    bg: string;
    type: string;
}
// const boxs1: IListData[] = [
//     { id: 3, category: 'Orange', bg: 'orange',},
//     { id: 4, category: 'Grape', bg: 'purple', },
//     { id: 5, category: 'Watermelon', bg: 'green', },
//     { id: 6, category: 'Peach', bg: 'pink', },
// ]
const boxs1: IListDataa1[] = [
    { id: 3, category: 'Orange', bg: 'orange', type: "card"},
    { id: 4, category: 'Grape', bg: 'purple', type: "card" },
    { id: 5, category: 'Watermelon', bg: 'green', type: "card" },
    { id: 6, category: 'Peach', bg: 'pink', type: "card" },
]

const Container = () => {

    const [cardList, setCardList] = useState<any[]>(boxs1);

    const changeCardList = (list: any[]) => {
        setCardList([...list]);
    }

    console.log(cardList)

    return (
        <div>
            <List cardList={ cardList } changeCardList={ changeCardList } />
        </div>
    )
}

export default Container;
