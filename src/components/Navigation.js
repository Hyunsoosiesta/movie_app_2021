import React from "react";
import { Link } from "react-router-dom"

// router 밖에서 Link를 쓸 수 없음

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;