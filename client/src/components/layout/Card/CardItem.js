import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../../context/profile/profileContext';


const CardItem = ({ profile }) => {
    const profileContext = useContext(ProfileContext);
    const { deleteProfile, setCurrent, clearCurrent } = profileContext;

    const { firstname, lastname, city, zipcode, skillshare, skillwanted, bio } = profile;

    const onDelete = () => {
        deleteProfile(firstname);
        clearCurrent();

    };


    return (
        <div className='card bg-light'>
            {/* <h3 className='text-primary text-left'>
                {name}{' '} <span style={{ float: 'right' }} 
                    className={'badge ' + (type === 'professional' ? 'badge-dark' : 'badge-dark' )}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3> */}
            <ul className="list">
                {firstname && ( 
                    <li>
                    <i class="fas fa-user"/> {firstname} {lastname}
                    </li>
                )}
                {city && (
                    <li>
                    <i class="fas fa-map-marker-alt"/> {city} {zipcode}
                    </li>
                )}
                {skillshare && (
                    <li>
                    <i class="fab fa-slideshare"/> {skillshare}
                    </li>
                )}
                {skillwanted && (
                    <li>
                    <i class="fas fa-book-reader"/> {skillwanted}
                    </li>
                )}
                {bio && (
                    <li>
                    <i class="fas fa-info-circle"/> {bio}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(profile)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

            </p>
        </div>
    )
};

CardItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default CardItem;