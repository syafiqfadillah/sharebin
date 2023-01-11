import { useNavigate } from "react-router-dom"
import axios from "axios"

import "../assets/Searchbin.css"

function Searchbin() {
    const nav = useNavigate()
    const search = window.location.search
    const fileId = search.slice(4, search.length)

    try {
        axios.get(`http://localhost:3333/get-file/${fileId}`)
        .then(result => document.getElementsByClassName("TextEditor")[0].innerHTML = result.data.data[0].content)
    } catch (err) {
        return
    }

    function addFile() {
        axios.post("http://localhost:3333/add-file")
        .then(result => nav(`/?id=${result.data.id}`))
    }

    function saveFile() {
        axios.put(`http://localhost:3333/save-file/${fileId}`, {
            content : document.getElementsByClassName("TextEditor")[0].value
        }).then(result => console.log(result))
    }

    return (
        <div className="Searchbin">
            <div className="Content">
                { search ?
                    <textarea className="TextEditor"></textarea>
                :
                    <h1>Welcome to Searchbin!</h1>
                }
            </div>
            <div className="Sidebar">
                <div className="WebName">
                    <h1>Sharebin</h1>
                </div>
                <div className="Toolbar">
                    <button onClick={saveFile}>Save</button>
                    <button onClick={addFile}>New File</button>
                </div>
            </div>
        </div>
    );
}

export default Searchbin;