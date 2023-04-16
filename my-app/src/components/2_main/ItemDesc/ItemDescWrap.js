import React from "react";
import { useParams } from "react-router";

import ItemDesc from "./ItemDesc";

function ItemDescWrap({
                        items,
                        detailedChange,
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
                detailedChange={detailedChange}
                name={name}
                desc={desc}
            ></ItemDesc>
    )
}

export default ItemDescWrap;