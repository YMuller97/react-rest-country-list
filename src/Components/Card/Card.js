import classes from './Card.module.css';


function Card ({flag, id, name, population, region, capital}) {

    const altText = `Flag of ${name}`;
    
    return (
        <section className={classes.card}>
            <img src={flag} alt={altText} className={classes['card-img']}></img>
            <h2>{name}</h2>
            <div className={classes['card-data']}>
                <p><span className={classes['field-name']}>Population : </span> {population} </p>
                <p><span className={classes['field-name']}>Region : </span>{region}</p>
                <p><span className={classes['field-name']}>Capital : </span>{capital}</p>
            </div> 
        </section>
    )
}

export default Card