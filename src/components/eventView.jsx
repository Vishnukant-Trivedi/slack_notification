import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'
import settingsManager from '../settingsManager';

class EventsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: ['Event A', 'Event B', 'Event C', 'Event D']
    };
  }

  handleSend = (eventName) => {
    console.log(eventName);
    const st = settingsManager.getSettingsArray();
    let flag = false;
    st.forEach(obj => {
      const hasEnabledEvent = obj.events.some(event => event.enabled);
      if (hasEnabledEvent) {
        obj.events.forEach(event => {
          if ((event.name === eventName) && (event.enabled)) {
            flag = true;
            axios.post('http://localhost:1234/message', { channel: obj.id, text: event.message })
              .then(response => {
                toast.success('Notification Sent');
              })
              .catch(error => {
                toast.error('Error - Notification not Sent ' + error.response.data);
              });
          }
        });
      }
    });
    if(!flag){
      toast.error('Oops No channels are selected for ' + eventName);
    }
  }

  render() {
    return (
      <div style={{ overflowY: 'scroll', height: '600px' }}>
        {this.state.events.map((event, index) => (
          <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px' }}>
            <h3>{event}</h3>
            <button onClick={() => this.handleSend(event)}>Trigger event</button>
          </div>
        ))}
      </div>
    );
  }
}

export default EventsView;
