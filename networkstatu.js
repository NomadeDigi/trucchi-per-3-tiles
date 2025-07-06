// networkStatus.js
// Monitors online/offline status of the user
// Author: [TuoNome] - For educational/study use only

class NetworkStatus {
  constructor() {
    this.status = navigator.onLine;
    this.listeners = [];

    window.addEventListener('online', this.updateStatus.bind(this));
    window.addEventListener('offline', this.updateStatus.bind(this));
  }

  updateStatus() {
    this.status = navigator.onLine;
    console.log(`[NetworkStatus] You are now ${this.status ? 'online' : 'offline'}.`);
    this.notify();
  }

  isOnline() {
    return this.status;
  }

  onChange(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
    }
  }

  notify() {
    this.listeners.forEach(cb => {
      try {
        cb(this.status);
      } catch (e) {
        console.error('[NetworkStatus] Callback error:', e);
      }
    });
  }
}

// Example usage
// const net = new NetworkStatus();
// net.onChange((online) => {
//   console.log('Network changed. Now online?', online);
// });

export default NetworkStatus;
