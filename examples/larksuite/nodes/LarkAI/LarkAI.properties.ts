import { INodeProperties } from 'n8n-workflow'
import { properties as resources } from './resources'

/**
[
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Image Recognition",
        "value": "AI Optical Character Recognition Image Recognition"
      },
      {
        "name": "Speech Recognition",
        "value": "AI Speech To Text Speech Recognition"
      },
      {
        "name": "Text",
        "value": "AI Machine Translation Text"
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "AI Optical Character Recognition Image Recognition"
        ]
      }
    },
    "options": [
      {
        "name": "Basic image recognition OCR",
        "value": "Basic image recognition OCR",
        "action": "Basic image recognition (OCR)",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/optical_char_recognition/v1/image/basic_recognize"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "AI Speech To Text Speech Recognition"
        ]
      }
    },
    "options": [
      {
        "name": "Streaming speech recognition ASR",
        "value": "Streaming speech recognition ASR",
        "action": "Streaming speech recognition (ASR)",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/speech_to_text/v1/speech/stream_recognize"
          }
        }
      },
      {
        "name": "Audio file speech recognition ASR",
        "value": "Audio file speech recognition ASR",
        "action": "Audio file speech recognition (ASR)",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/speech_to_text/v1/speech/file_recognize"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ]
      }
    },
    "options": [
      {
        "name": "Translate with machine translation",
        "value": "Translate with machine translation",
        "action": "Translate with machine translation",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/translation/v1/text/translate"
          }
        }
      },
      {
        "name": "Text language recognition",
        "value": "Text language recognition",
        "action": "Text language recognition",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/translation/v1/text/detect"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "POST /optical_char_recognition/v1/image/basic_recognize",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "AI Optical Character Recognition Image Recognition"
        ],
        "operation": [
          "Basic image recognition OCR"
        ]
      }
    }
  },
  {
    "displayName": "Image",
    "name": "image",
    "type": "string",
    "default": "",
    "routing": {
      "request": {
        "body": {
          "image": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Optical Character Recognition Image Recognition"
        ],
        "operation": [
          "Basic image recognition OCR"
        ]
      }
    }
  },
  {
    "displayName": "POST /speech_to_text/v1/speech/stream_recognize",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "AI Speech To Text Speech Recognition"
        ],
        "operation": [
          "Streaming speech recognition ASR"
        ]
      }
    }
  },
  {
    "displayName": "Config",
    "name": "config",
    "type": "json",
    "default": "{}",
    "routing": {
      "request": {
        "body": {
          "config": "={{ JSON.parse($value) }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Speech To Text Speech Recognition"
        ],
        "operation": [
          "Streaming speech recognition ASR"
        ]
      }
    }
  },
  {
    "displayName": "Speech",
    "name": "speech",
    "type": "json",
    "default": "{}",
    "routing": {
      "request": {
        "body": {
          "speech": "={{ JSON.parse($value) }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Speech To Text Speech Recognition"
        ],
        "operation": [
          "Streaming speech recognition ASR"
        ]
      }
    }
  },
  {
    "displayName": "POST /speech_to_text/v1/speech/file_recognize",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "AI Speech To Text Speech Recognition"
        ],
        "operation": [
          "Audio file speech recognition ASR"
        ]
      }
    }
  },
  {
    "displayName": "Config",
    "name": "config",
    "type": "json",
    "default": "{}",
    "routing": {
      "request": {
        "body": {
          "config": "={{ JSON.parse($value) }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Speech To Text Speech Recognition"
        ],
        "operation": [
          "Audio file speech recognition ASR"
        ]
      }
    }
  },
  {
    "displayName": "Speech",
    "name": "speech",
    "type": "json",
    "default": "{}",
    "routing": {
      "request": {
        "body": {
          "speech": "={{ JSON.parse($value) }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Speech To Text Speech Recognition"
        ],
        "operation": [
          "Audio file speech recognition ASR"
        ]
      }
    }
  },
  {
    "displayName": "POST /translation/v1/text/translate",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ],
        "operation": [
          "Translate with machine translation"
        ]
      }
    }
  },
  {
    "displayName": "Glossary",
    "name": "glossary",
    "type": "json",
    "default": "[\n  {}\n]",
    "routing": {
      "request": {
        "body": {
          "glossary": "={{ JSON.parse($value) }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ],
        "operation": [
          "Translate with machine translation"
        ]
      }
    }
  },
  {
    "displayName": "Source Language",
    "name": "source_language",
    "type": "string",
    "default": "",
    "routing": {
      "request": {
        "body": {
          "source_language": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ],
        "operation": [
          "Translate with machine translation"
        ]
      }
    }
  },
  {
    "displayName": "Target Language",
    "name": "target_language",
    "type": "string",
    "default": "",
    "routing": {
      "request": {
        "body": {
          "target_language": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ],
        "operation": [
          "Translate with machine translation"
        ]
      }
    }
  },
  {
    "displayName": "Text",
    "name": "text",
    "type": "string",
    "default": "",
    "routing": {
      "request": {
        "body": {
          "text": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ],
        "operation": [
          "Translate with machine translation"
        ]
      }
    }
  },
  {
    "displayName": "POST /translation/v1/text/detect",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ],
        "operation": [
          "Text language recognition"
        ]
      }
    }
  },
  {
    "displayName": "Text",
    "name": "text",
    "type": "string",
    "default": "",
    "routing": {
      "request": {
        "body": {
          "text": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "AI Machine Translation Text"
        ],
        "operation": [
          "Text language recognition"
        ]
      }
    }
  }
]
*/

export const properties: INodeProperties[] = [...resources]
