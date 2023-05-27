import {GlobeIcon} from "./Icons";

export default function Header() {
    return (
        <header className="header">
            <div className="header-title">
                <GlobeIcon />
                <p> My Travel Journal</p>
            </div>
        </header>
    );
};