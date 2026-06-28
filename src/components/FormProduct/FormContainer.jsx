import React, {useState} from "react";
import { FormProduct } from "./FormProduct";
import styles from "./FormContainer.module.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export function FormContainer() {
    const [dataForm, setDataForm] = useState({
        details: '',
        name: '',
        price: '',
        stock: '',
        category: ''
    });

    const [imageFile, setImageFile] = useState(null);
   
    const handleChange = (e) => {
        setDataForm({
            ... dataForm,
            [e.target.name]: e.target.value
        });
    };


    const handleImageChange = (evento) => {
        setImageFile(evento.target.files[0]);
    };

    const handleSend = async (evento) => { 
        evento.preventDefault();
        if (!imageFile) {
            alert("You should choose a picture for the product.");
            return;
        }
        const apiKey = '9185cdcb00872d80ffeeab4601937375';
        const formData = new FormData();
        formData.append("image", imageFile);
        try {
            console.log("Charging image to Imgbb...")
            const answerImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: 'POST',
                    body: formData,
                });

            const imgbbData = await answerImgbb.json();
            
            if (imgbbData.success) {
                console.log("Picture uploaded correctly. URL: ", imgbbData.data.url);

            const urlImage = imgbbData.data.url;

            const fullProduct = { ...dataForm, urlImage: urlImage};
            console.log('The product is ready for send: ', fullProduct);
            const db = getFirestore();
            const productsCollection = collection(db, "productos-nacionales");
            await addDoc(productsCollection, fullProduct);
            } else {
                throw new Error("Failed upload to Imgbb.");
            }

        } catch (error) {
            console.error("Error sending data: ", error);
        }
    };
    return (
        <div className={styles.containerForm}>
            <FormProduct
            datosForm={dataForm}
            handleChange={handleChange}
            handleSend={handleSend}
            handleImageChange={handleImageChange}/>
        </div>
    );
}