import React from "react";
import { Spinner } from "react-bootstrap";

export function LoadingSpinner() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50hv' }}>
            <Spinner animation="border" role="status" style={{ color: '#00d9ff', width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading</span>
            </Spinner>
        </div>
    );
}