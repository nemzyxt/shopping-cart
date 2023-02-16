import { createContext, useState } from "react";
import { productsArray } from "./products";

const CardContext = createContext({
    items: [],
    getProductQuantity: () => {},
    
})