import Card from '../Card/Card';
import classes from './List.module.css'


const List = ({countries}) => {
    const Cards = countries.map( (country) => {
        return <Card key={country.cc3} 
                    flag={country.flags.svg}
                    id={country.cc3}
                    name={country.name.official} 
                    population={country.population}
                    region={country.region}
                    capital={country.content} 
                    />
    });

    return (
        <div className={classes['country-list']}>
            {Cards}
        </div>
    )
}

export default List;