import React, { useState } from 'react';
import settingsManager from '../settingsManager'; 
import { toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'

const SettingsView = () => {
  const [settings, setSettings] = useState(settingsManager.getSettingsArray());
  const handleToggle = (channelIndex, eventIndex) => {
    const updatedSettings = [...settings];
    updatedSettings[channelIndex].events[eventIndex].enabled = !updatedSettings[channelIndex].events[eventIndex].enabled;
    setSettings(updatedSettings);
  };

  const handleSave = () => {
    settingsManager.setSettingsArray(settings);
    toast.success('Hurry! Settings Saved');
  };

  return (
    <div>
      {settings.map((channel, channelIndex) => (
        <div key={channelIndex} className="card">
          <h3>{channel.name}</h3>
          <ul>
            {channel.events.map((event, eventIndex) => (
              <li key={eventIndex}>
                <label>
                  <input
                    type="checkbox"
                    checked={event.enabled}
                    onChange={() => handleToggle(channelIndex, eventIndex)}
                  />
                  {event.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default SettingsView;
