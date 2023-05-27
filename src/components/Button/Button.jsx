import { useMemo } from 'react'
import './Button.css'
//componente de display que necesita recibir props y mostrarlos
//recibir data y mostrarla, no piensa, pero si necesita implementar
export default function Buttton({
    children,
    onClick,
    variant = 'default',
    href,
}) {
    const classes = {
        default: 'button',
        outline: 'outline',
        ghost: 'ghost',
        link: 'link'

    }

    // if(variant==='link') {
    //     return(
    //         <a href={href}>
    //         <button style={classes[variant]}>    
    //         {children}
    //         </button>
    //         </a>

    //     )
    // }

    // const component = variant === 'link' ? <a/>:<button/>

    //[] se va a estar actualizando cuando "variant pase"
    //observador a la variante
    // const component =useMemo(()=>{
    //     if(variant==='link'){
    //         return <a/>
    //     }else {
    //         return <button/>
    //     }
    // },[variant]);


    return (
        <>
            {variant==='link' ?
            <a className={classes[variant]} href={href}>
             {children}
            </a> :
            <button className={classes[variant]}>
             {children}
            </button>
            }
        </>
    )
}

//props que me des props que se usan
// const SimpleButton = (props) => <button {...props} />
// const SimpleAnchor = (props) => <a {...props} />