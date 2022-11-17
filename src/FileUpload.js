import axios from "axios";
import { useState } from "react";

export default function FileUpload() {
    const [file, setFile] = useState(null)
    const onChange = (e) => setFile(e.target.files[0])
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file)
        const response = await axios.post("https://mitchels.io", formData)
        console.log(response);
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <label htmlFor="file">Image Upload</label>
                <br />
                <input type="file" id="file" accept=".jpg,.png" onChange={ onChange } />
                <br />
                <br />
                <button type="submit">Upload file</button>
            </form>
        </>
    )
}