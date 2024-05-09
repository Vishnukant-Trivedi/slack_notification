import React from 'react';
import EventsView from '../components/eventView';
import { ToastContainer } from 'react-toastify';

export const Events = () => {
    return (
        <div>
            <nav className="top-bar">
                <p>
                    Go to <a className="settings-link" href='/settings'> Settings Page</a>
                </p>
            </nav>
            <h2>Events</h2>
            <ToastContainer />
            <EventsView />
        </div>
    );
};
