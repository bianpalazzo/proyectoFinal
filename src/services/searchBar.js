import { handleGetProductLocalStorage } from "..src/persistence/localStorage";
import { handleRenderList } from "..src/views/store";

export const handleSearchProductByName =() =>{
const imputHeader = document.getElementById("imputHeader");
const produts = handleGetProductLocalStorage()

const result = produts.filter((el) =>
    el.nombre.tolowerCase().includes(inputHeader.value)
);

handleRenderList(result);
};