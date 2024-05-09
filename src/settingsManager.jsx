// Singleton class for managing JSON array
class SettingsManager {
    constructor() {
      if (!SettingsManager.instance) {
        this.settingsArray = [];
        SettingsManager.instance = this;
      }
      return SettingsManager.instance;
    }
  
    // Setter to update the JSON array
    setSettingsArray(settingsArray) {
      this.settingsArray = settingsArray;
      localStorage.setItem('settings', JSON.stringify(settingsArray));
    }
  
    // Getter to retrieve the JSON array
    getSettingsArray() {
      return JSON.parse(localStorage.getItem('settings'));
    }
    setChannels(channels){
        if (Array.isArray(channels)) {
            this.settingsArray = channels.map((channel) => ({
                id: channel.id,
                name: channel.name,
                events: [
                    { name: "Event A", enabled: false, message:"Event A triggered!" },
                    { name: "Event B", enabled: false, message:"Event B triggered!" },
                    { name: "Event C", enabled: false, message:"Event C triggered!" },
                    { name: "Event D", enabled: false, message:"Event D triggered!" }
                ]
            }));
            if(JSON.parse(localStorage.getItem('settings')) && JSON.parse(localStorage.getItem('settings')) != []){
                let stArray = JSON.parse(localStorage.getItem('settings'));
                this.settingsArray = this.settingsArray.map(item => {
                    const matchedItem = stArray.find(refItem => refItem.id === item.id)
                    if (matchedItem) {
                        return { ...item, events: matchedItem.events };
                      }
                      return item;
                })
            }
            console.log('after stArray');
            console.log(this.settingsArray);
        } else {
            console.error('Channels is not an array:', channels);
        }
        localStorage.setItem('settings', JSON.stringify(this.settingsArray));
    }
  }
  
  // Singleton instance
  const settingsManager = new SettingsManager();
  
  // Example JSON array
  const initialSettingsArray = JSON.parse(localStorage.getItem('settings'));
  
  // Setting initial JSON array
  settingsManager.setSettingsArray(initialSettingsArray);

  
  // Export the singleton instance
  export default settingsManager;
  