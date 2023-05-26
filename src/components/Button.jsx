//componente de display que necesita recibir props y mostrarlos
//recibir data y mostrarla, no piensa, pero si necesita implementar
export default function Buttton({children, onClick}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}