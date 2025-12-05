var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama",
      "name": "Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.047444998641925196,
        "pitch": 0,
        "fov": 1.4429826952069542
      },
      "linkHotspots": [
        {
          "yaw": 0.0069932779942920575,
          "pitch": 0.21545852823278722,
          "rotation": 0,
          "target": "1-panorama3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama3",
      "name": "Panorama(3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0011985678668811062,
          "pitch": 0.24088711428511722,
          "rotation": 0,
          "target": "0-panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
