//====LOCALSTORAGE=====
//TRAER PRODUCTOS LOCALSTORAGE
export const handleGetProductlocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
};

//GUARDAR EN LOCALSTORAGE
//RECIBIR UN PRODUCTO
export const setInlocalStorage = (productIn) => {
    if (productIn) {
        //TRAER LOS ELEMENTOS
        let productsInlocal = handleGetProductlocalStorage();
        console.log(productIn);
        const existingIndex = productsInlocal.findIndex(
            (productslocal) => productslocal.id === productIn.id
        );
        //VERIFICAR SI EL ELEMENTO EXISTE
        if (existingIndex !== -1) {
            //SI EXISTE, DEBE REEMPLAZARSE
            productsInlocal[existingIndex] = productIn;
        } else {
            //SI NO EXISTE DEBE AGREGARSE
            productsInlocal.push(productIn);
        }
        //SETEAR EL NUEVO ARRAY
        localStorage.setItem("products", JSON.stringify(productsInlocal));
    }
};
