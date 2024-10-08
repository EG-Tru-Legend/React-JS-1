import PropTypes from 'prop-types';
import { Card } from '../../UI/Card.jsx';
import './ModuleCard.scss';


function ModuleCard({ module }) {
    // Initialisation ----------------------------------------------------
    // State -------------------------------------------------------------
    // Handlers ----------------------------------------------------------
    // View --------------------------------------------------------------
    return (
        <div className='moduleCard'>
            <Card>
            <p>{module.ModuleCode}</p>
            <p>{module.ModuleName}</p>
            <img src={module.ModuleImageURL} />
            </Card>
        </div>
    )
}

ModuleCard.PropTypes = {
    module: PropTypes.shape({
        ModuleCode: PropTypes.string.isRequired,
        ModuleName: PropTypes.string.isRequired,
        ModuleImageURL: PropTypes.string.isRequired,
    }),
};

export default ModuleCard;