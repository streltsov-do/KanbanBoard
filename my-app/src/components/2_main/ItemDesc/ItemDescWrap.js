import React from "react";
import { useParams } from "react-router";

import ItemDesc from "./ItemDesc";

function ItemDescWrap({
                        items,
                        changeDescription,
                        arrayIndex,
                        id,
                        name,
                        desc
}) {
    let params = useParams();
    return (
            <ItemDesc
                items={items}
                arrayIndex={arrayIndex}
                id={params.id}
                changeDescription={changeDescription}
                name={name}
                desc={desc}
            ></ItemDesc>
    )
}

export default ItemDescWrap;