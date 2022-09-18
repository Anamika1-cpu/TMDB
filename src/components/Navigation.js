import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    const st = {
        marginRight: '80px',
        fontSize: '20px'
    };
    return (
        <div className=" mt-2 bd-highlight">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <ul className="navbar-nav m-auto">
                    <li style={st} className="mr-10">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li style={st} className="ml-5 ">
                        <Link to='/popular/tvshow'>Popular TvShows</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;