import React,{useState , useRef} from 'react'

export default function Edit() {
    const [edit, setEdit] = useState(false);
    const [input, setInput] = useState('');
    const inputRef = useRef();

    const onBtnClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }

        setEdit(!edit);
    }

    return (
        <div>
             {!edit ?
                <>
                    <input type="button" value="edit" onClick={onBtnClick} />
                </>
                :
                <>
                    <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <input type="button" value="save" onClick={onBtnClick} />
                </>
            }
        </div>
    )
}
