import React, {useEffect, useState} from "react";
import { FormProduct } from "./FormProduct";
import styles from "./FormContainer.module.css";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

export function FormContainer({ productToEdit, setProductToEdit }) {

    const initForm = {
        name: '',
        details: '',
        price: '',
        stock: '',
        category: ''
    };

    const [dataForm, setDataForm] = useState(initForm);

    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (productToEdit) {
            setDataForm(productToEdit);
        } else {
            setDataForm(initForm);
        }
    }, [productToEdit])
   
    const handleChange = (e) => {
        setDataForm({
            ... dataForm,
            [e.target.name]: e.target.value
        });
    };

    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (evento) => {
        const file = evento.target.files[0];
        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleSend = async (evento) => { 
        evento.preventDefault();
        if (!imageFile && !productToEdit) {
            alert("You should choose a picture for the product.");
            return;
        }
        
        if (dataForm.name.trim() === "" || dataForm.price <= 0) {
            alert("Please complete all the fields with valid values...");
            return;
        }

        let urlImage = dataForm.urlImage || '';

        if (imageFile) {
            try {
                const formData = new FormData();
                formData.append('image', imageFile);
                const apiKey = '9185cdcb00872d80ffeeab4601937375';
                const answerImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,
                    {
                        method: 'POST',
                        body: formData,
                    });

                const imgbbData = await answerImgbb.json();
                
                if (imgbbData.success) {
                    urlImage = imgbbData.data.url;
                } else {
                    throw new Error("Failed upload to Imgbb.");
                }
            } catch (error)  {
                console.error("Error uploading image: ", error);
                alert("Error uploading the image, please try again...")  ;
                return;
            }
        }
            
        const fullProduct = { ...dataForm, urlImage: urlImage};
        try {
            if (productToEdit) {
                const docRef = doc (db, "products", productToEdit.id);
                await updateDoc(docRef, fullProduct);
                alert("Product has been updated...");
            } else {
                const productsCollection = collection(db, "products");
                await addDoc(productsCollection, fullProduct);
            }
            setDataForm(initForm);
            setPreviewUrl(null);
        } catch (error) {
            console.error("Error sending data: ", error);
        }
    };
    const handleCancelEdit = () => {
        setProductToEdit(null);
        setDataForm(initForm);
    };
    return (
        <div className={styles.containerForm}>
            <FormProduct
            datosForm={dataForm}
            handleChange={handleChange}
            handleSend={handleSend}
            handleImageChange={handleImageChange}
            previewUrl={previewUrl}
            cancelEdit={handleCancelEdit}
            productEdit={productToEdit}
            editionMode={!!productToEdit}/>
        </div>
    );
}