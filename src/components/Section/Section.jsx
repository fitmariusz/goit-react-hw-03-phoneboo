import css from './Section.module.css'

export const Section = (props) => {
    const {title, children} = props
    return (<>
        <section>
            <h2 className={css.h2}>{title}</h2>
            {children}
    </section>
    </>)   
}