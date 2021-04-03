import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl,setImgUrl] = useState('')

    const onSubmit = data => {
        const eventData ={
            name: data.name,
            imgUrl:imgUrl,
        }
        fetch('http://localhost:5000/addEvent',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('server side response: ' + data)
        })
    };
    const handelImgUpload = event => {
        // console.log(event.target.files[0]);
        const imgData = new FormData()
        imgData.set('key', '19693cb30f09ee1ec72107c86aa67582');
        imgData.append('image', event.target.files[0])
        console.log(imgData);

        axios.post('https://api.imgbb.com/1/upload',imgData)
            .then(function (response) {
                // handle success
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New Event" {...register("name")} /> <br/> <br/>
                <input name="file" type="file" onChange={handelImgUpload}/><br/> <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;