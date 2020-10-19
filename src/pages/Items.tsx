import React from "react";
import { ItemTypes } from "../data/adhoc";
import { ItemType } from "../data/types";

export const Items = () => 
    <div className="columns is-multiline">
        {Object.entries(ItemTypes).map(([key, item] : [any, ItemType]) =>
            <Item key={key} item={item} />
        )}
    </div>

interface IItemProps {
    item: ItemType
}

export const Item = ({item} : IItemProps) =>
    <div className="column is-one-third">
        <div className="box">
            <h2>{item.name}</h2>
            <p>
                {item.usage}
            </p>
            <h3>Tips</h3>
            <ul>
                {item.tips?.map(tip => <li>{tip}</li>)}
            </ul>
            <h3>Categories</h3>
            <ul>
                {item.categories?.map(category => <li>{category.name}</li>)}
            </ul>
        </div>
    </div>