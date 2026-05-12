import React, {useState} from "react";
import { FormProduct } from "./FormProduct";

export function FormContainer() {
    const [dataForm, setDataForm] = useState({
        nombre: '',
        price: '',
        stock: ''
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
        const apiKey = '9185cdcb00872d80ffeeab4601937375';
        const formData = new FormData();
        formData.append("image", imageFile);

        const answerImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,
            {
                method: 'POST',
                body: formData,
            });

        const imgbbData = await answerImgbb.json();
        const urlImage = imgbbData.data.url;

        const fullProduct = { ...dataForm, urlImage: urlImage};
        console.log('The product is ready for send: ', fullProduct);

    };

    return (
        <FormProduct
        datosForm={dataForm}
        handleChange={handleChange}
        handleSend={handleSend}
        handleImageChange={handleImageChange}/>
    );
}