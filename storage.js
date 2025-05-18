// storage.js

export function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('kanaSettings')) || {
      kanaCount: 10,
      useHiragana: true,
      useKatakana: false
    };
    return settings;
  }
  
  export function saveSettings(settings) {
    localStorage.setItem('kanaSettings', JSON.stringify(settings));
  }
  
  export function loadStats() {
    return JSON.parse(localStorage.getItem('kanaStats') || '{}');
  }
  
  export function updateStats(kana, correct, time = 0) {
    const stats = loadStats();
    if (!stats[kana]) stats[kana] = { correct: 0, incorrect: 0, timeSpent: 0 };
  
    if (correct) stats[kana].correct++;
    else stats[kana].incorrect++;
  
    stats[kana].timeSpent += time;
  
    localStorage.setItem('kanaStats', JSON.stringify(stats));
  }  
  
  export function resetStats() {
    localStorage.removeItem('kanaStats');
  }
  