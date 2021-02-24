import React from 'react';
import PropTypes from 'prop-types';
import Sitem from './Sitem';
import css from './statistic.module.css'


const Statistic = ({statisticData}) => { 
    return(
        <div className={css.statistic}><h2 className={css.tagTittle}>Upload Stats</h2> 
            
     <ul className={css.statsList}>{statisticData.map((item)=>
    <Sitem key={item.id} {...item}/>
    )}
    </ul>
       </div>
    )
};
export default Statistic;

Statistic.propTypes = {
    statisticData: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
};
