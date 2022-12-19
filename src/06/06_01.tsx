import {ChangeEvent} from "react";

export const User = () => {


    const deleteUser = () => {
        alert('user deleted')
    }

    const saveUser = () => {
        alert('user saved')
    }

    const nameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    return (
        <div>
            <textarea onBlur={focusLostHandler} onChange={nameChanged}> Rusik</textarea>
            <input type="number" onChange={onAgeChanged}/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}