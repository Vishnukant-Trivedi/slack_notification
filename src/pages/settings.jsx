import React, {useState, useEffect} from 'react';
import SettingsView from '../components/settingsView';
import settingsManager from '../settingsManager'; 
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
export const Settings = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        const fetchChannels = async () => {
          try {
            const response = await axios.get('https://lucid-growth-53sd.onrender.com/channel-list');
            settingsManager.setChannels(response.data)
            setChannels(settingsManager.getSettingsArray());
            setIsLoading(false);
          } catch (error) {
            setError(error);
            setIsLoading(false);
            console.error('Error fetching channels:', error);
          }
        };
    
        fetchChannels();
      }, []);
    return (
        <div>
            <nav className="top-bar">
                <p>
                    Go to <a className='events-link' href='/events'> Event Page</a>
                </p>
            </nav>
      <h2>Slack Notification Settings</h2>
      <ToastContainer />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <SettingsView data={channels} /> 
      )}
    </div>
    );
};