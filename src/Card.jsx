import { PositionIcon } from "./Icons";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt={props.item.tittle} />
            <div className="card-info">
                <div className="card-info-location">
                <span>
                    <PositionIcon />
                    <p>{props.item.location}</p>
                </span>
                    <a href={props.item.googleMapUrl}>View on Google Maps</a>
                </div>
                <h3>{props.item.tittle}</h3>
                <h4>
                    {props.item.startDate} - {props.item.endDate}
                </h4>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    );
};