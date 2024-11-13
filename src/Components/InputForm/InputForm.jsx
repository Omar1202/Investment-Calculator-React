

export default function InputForm({ labelName, identifier, changingFunc, typeOf, defVal }) {

    function handleChange(event) {
        changingFunc(identifier, event.target.value);
    }

    return (
        <>
            <label> {labelName}</label>
            <input type={typeOf} onChange={handleChange} name={identifier} id={identifier} defaultValue={defVal} />
        </>
    )

}