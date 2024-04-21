import  "./Input.module.css"


export const Input = ({name, value,type, onChange, pattern}) => {
    return <>
        <input name={name} type={type} value={value} onChange={onChange} pattern={pattern} ></input>
    </>
}