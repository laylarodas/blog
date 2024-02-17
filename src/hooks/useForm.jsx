import { useState } from "react";


export const useForm = (initialObject = {}) => {

    const [form, setForm] = useState(initialObject);

    const serializeForm = (form) => {
        const formData = new FormData(form);
        const completeObject = {};


        for (let [name, value] of formData) {
              completeObject[name]= value;
            
        }

        return completeObject;
    }

    const sent = (e) =>{
        e.preventDefault();

        /*let course = {
            title: e.target.title.value,
            year: e.target.year.value,
            description: e.target.description.value,
            autor: e.target.autor.value,
            email: e.target.email.value
        }*/

        let course = serializeForm(e.target);
        setForm(course);

        document.querySelector(".code").classList.add("sent");
    }

    const changed = ({target}) => {
        const {name, value} = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return {

        form,
        sent,
        changed
    }
}
