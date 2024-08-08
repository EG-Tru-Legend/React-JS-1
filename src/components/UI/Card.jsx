import './Card.scss';

export function CardContainer(props) {
    // Initialisation ----------------------------------------------------
    // State -------------------------------------------------------------
    // Handlers ----------------------------------------------------------
    // View --------------------------------------------------------------
    return(
        <div className="cardContainer">
            { props.children }
        </div>
    );
}

export function Card(props) {
    // Initialisation ----------------------------------------------------
    // State -------------------------------------------------------------
    // Handlers ----------------------------------------------------------
    // View --------------------------------------------------------------
    return(
        <div className="card">
            { props.children }
        </div>
    );
}

