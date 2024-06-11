import React from 'react'
import Indice from './indice'
import styles from './footer.module.css'

const Footer = () => {

    const indices = [
        { id: 137, name: "TA-35" },
        { id: 142, name: "TA-90" },
        { id: 143, name: "TA-125" },
        { id: 164, name: "TA-Banks" },
        { id: 149, name: "TA-Real Estate" }
    ];

    const renderIndices = () => {
        return indices.map((item, index) => (
            <Indice
                key={index}
                indice={item.id}
                name={item.name}
            />
        ))
    }

    return (
        <div className={`${styles.footer} bg-light`}>
            <div className="row">
                {renderIndices()}
            </div>
        </div>
    )
}

export default Footer