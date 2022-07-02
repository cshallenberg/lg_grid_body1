// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: 'watertalking.mp3',
    2: 'Tiergarten.mp3',
    3: 'desert.mp3',
    4: 'drone.mp3',
    5: 'EWbirds.mp3',
    6: 'forest.mp3',
    7: 'thunder.mp3',
    8: 'Grunewald.mp3',
    9: 'HvonK.mp3',
    10: 'strings.mp3',
    11: 'ocean.mp3',
    12: '',
    13: '',
    14: '',
    15: '',  
    16: '',
    17: '',
    18: '',
    19: '',
    20: 'body1.1.mp3',
    21: 'body1.2.mp3',
    22: 'body1.3.mp3',
    23: 'body1.4.mp3',
    24: 'body1.5.mp3',
    25: 'body1.6.mp3',
    26: 'body1.7.mp3',
    27: 'body1.8.mp3',  
    28: 'body1.9.mp3',
    29: 'body1.10.mp3',
    30: 'body1.11.mp3',
    31: 'body1.12.mp3',
    32: 'body1.13.mp3',
    33: 'body1.14.mp3',
    34: 'body1.15.mp3',
    35: 'wind2.mp3',
    36: 'birds5.mp3'
}; 

// Directory of the sound files. 
const directory = 'Audio/';

class Audio {
    constructor() {
        this.tones = []; 
        this.assignIdx = 0; // Updates after every tone assignment to each sensor.  
        this.loadSounds(); // Load all sounds in tones. 
        
        // Debug logs. 
        // console.log(this.tones);
    }

    loadSounds() {
        const size = Object.keys(sounds).length; 
        for (let i = 1; i <= size; i++) {
            const filePath = directory + sounds[i];
            let sound = loadSound(filePath);
            this.tones.push(sound);
        }
    }

    assignTone() {
        let sensorTone = this.tones[this.assignIdx]; 
        this.assignIdx++; 
        return sensorTone; 
    }
};