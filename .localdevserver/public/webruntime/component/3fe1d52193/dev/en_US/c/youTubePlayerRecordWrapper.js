Webruntime.moduleRegistry.define('c/youTubePlayerRecordWrapper', ['lightning/card', 'lightning/button', 'lwc', 'webruntime/configProvider', 'lightning/platformResourceLoader', 'lightning/platformShowToastEvent', 'lightning/uiRecordApi'], function (_lightningCard, _lightningButton, lwc, configProvider, platformResourceLoader, platformShowToastEvent, uiRecordApi) { 'use strict';

    _lightningCard = _lightningCard && _lightningCard.hasOwnProperty('default') ? _lightningCard['default'] : _lightningCard;
    _lightningButton = _lightningButton && _lightningButton.hasOwnProperty('default') ? _lightningButton['default'] : _lightningButton;

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "iframe" + shadowSelector + " {border: 0;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        h: api_element,
        c: api_custom_element,
        b: api_bind
      } = $api;
      const {
        _m0,
        _m1,
        _m2,
        _m3,
        _m4,
        _m5
      } = $ctx;
      return [$cmp.youTubeId ? api_element("div", {
        classMap: {
          "wrapper": true
        },
        context: {
          lwc: {
            dom: "manual"
          }
        },
        key: 3
      }, []) : null, !$cmp.youTubeId ? api_custom_element("lightning-card", _lightningCard, {
        props: {
          "title": "Select a Training Video"
        },
        key: 5
      }, []) : null, api_element("div", {
        classMap: {
          "slds-m-top_small": true,
          "slds-m-bottom_medium": true
        },
        key: 6
      }, [api_custom_element("lightning-button", _lightningButton, {
        classMap: {
          "slds-m-left_x-small": true
        },
        props: {
          "label": "What is a Salesforce Dashboard?",
          "value": "J1R8Nk0pI-s",
          "title": "Non-primary action"
        },
        key: 7,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
        }
      }, []), api_element("br", {
        key: 8
      }, []), api_custom_element("lightning-button", _lightningButton, {
        classMap: {
          "slds-m-left_x-small": true
        },
        props: {
          "label": "How do I access Salesforce on a mobile device?",
          "value": "U_shI9fX2ms",
          "title": "Non-primary action"
        },
        key: 9,
        on: {
          "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
        }
      }, []), api_element("br", {
        key: 10
      }, []), api_custom_element("lightning-button", _lightningButton, {
        classMap: {
          "slds-m-left_x-small": true
        },
        props: {
          "label": "What does the Opportunity Close Date field represent?",
          "value": "W0rd7pSD09U",
          "title": "Non-primary action"
        },
        key: 11,
        on: {
          "click": _m2 || ($ctx._m2 = api_bind($cmp.handleClick))
        }
      }, []), api_element("br", {
        key: 12
      }, []), api_custom_element("lightning-button", _lightningButton, {
        classMap: {
          "slds-m-left_x-small": true
        },
        props: {
          "label": "What is a Salesforce Activity?",
          "value": "Po7xPUyknuw",
          "title": "Non-primary action"
        },
        key: 13,
        on: {
          "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
        }
      }, []), api_element("br", {
        key: 14
      }, []), api_custom_element("lightning-button", _lightningButton, {
        classMap: {
          "slds-m-left_x-small": true
        },
        props: {
          "label": "What is the difference between a Suspect, Prospect and Opportunity?",
          "value": "cz8xGhGMd_M",
          "title": "Non-primary action"
        },
        key: 15,
        on: {
          "click": _m4 || ($ctx._m4 = api_bind($cmp.handleClick))
        }
      }, []), api_element("br", {
        key: 16
      }, []), api_custom_element("lightning-button", _lightningButton, {
        classMap: {
          "slds-m-left_x-small": true
        },
        props: {
          "label": "What is the difference between an Open Opportunity and a Closed one?",
          "value": "mtMts03-xBI",
          "title": "Non-primary action"
        },
        key: 17,
        on: {
          "click": _m5 || ($ctx._m5 = api_bind($cmp.handleClick))
        }
      }, [])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-basicYouTubePlayer_basicYouTubePlayer-host",
      shadowAttribute: "lwc-basicYouTubePlayer_basicYouTubePlayer"
    };

    var YouTubePath = `${configProvider.getBasePath()}/assets/00b51cca6d/YouTubeJS`;

    class BasicYouTubePlayer extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.youTubeId = void 0;
        this.player = void 0;
      }

      handleClick(event) {
        this.youTubeId = event.target.value;
      }

      renderedCallback() {
        if (!this.youTubeId) {
          return;
        }

        if (window.YT) {
          if (this.player) {
            this.player.cueVideoById(this.youTubeId);
          } else {
            this.onYouTubeIframeAPIReady();
          }
        } else {
          Promise.all([platformResourceLoader.loadScript(this, YouTubePath + '/iframe_api.js'), platformResourceLoader.loadScript(this, YouTubePath + '/widget_api.js')]).then(() => {
            this.onYouTubeIframeAPIReady();
          }).catch(error => {
            this.showErrorToast(error);
          });
        }
      }

      onPlayerError(e) {
        let explanation = '';

        if (e.data === 2) {
          explanation = 'Invalid YouTube ID';
        } else if (e.data === 5) {
          explanation = 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.';
        } else if (e.data === 100) {
          explanation = 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.';
        } else if (e.data === 101 || e.data === 150) {
          explanation = 'The owner of the requested video does not allow it to be played in embedded players.';
        }

        this.showErrorToast(explanation);
      }

      showErrorToast(explanation) {
        const evt = new platformShowToastEvent.ShowToastEvent({
          title: 'Error loading YouTube player',
          message: explanation,
          variant: 'error'
        });
        this.dispatchEvent(evt);
      }

      onYouTubeIframeAPIReady() {
        const containerElem = this.template.querySelector('.wrapper');
        const playerElem = document.createElement('DIV');
        playerElem.className = 'player';
        containerElem.appendChild(playerElem);
        this.player = new window.YT.Player(playerElem, {
          height: '390',
          width: '100%',
          videoId: this.youTubeId,
          events: {
            onError: this.onPlayerError.bind(this)
          }
        });
      }

    }

    lwc.registerDecorators(BasicYouTubePlayer, {
      publicProps: {
        youTubeId: {
          config: 0
        }
      }
    });

    var _cBasicYouTubePlayer = lwc.registerComponent(BasicYouTubePlayer, {
      tmpl: _tmpl
    });

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element
      } = $api;
      return [$cmp.youTubeId ? api_custom_element("c-basic-you-tube-player", _cBasicYouTubePlayer, {
        props: {
          "youTubeId": $cmp.youTubeId
        },
        key: 3
      }, []) : null, !$cmp.youTubeId ? api_custom_element("lightning-card", _lightningCard, {
        props: {
          "title": "YouTube ID field not found. Please double check the field name."
        },
        key: 5
      }, []) : null];
    }

    var _tmpl$1 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lwc-youTubePlayerRecordWrapper_youTubePlayerRecordWrapper-host",
      shadowAttribute: "lwc-youTubePlayerRecordWrapper_youTubePlayerRecordWrapper"
    };

    class YouTubePlayerRecordWrapper extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.fieldName = void 0;
        this.objectApiName = void 0;
        this.recordId = void 0;
        this.record = void 0;
      }

      get youTubeId() {
        return this.record.data ? this.record.data.fields[this.fieldName].value : '';
      }

      get fields() {
        return [this.objectApiName + '.' + this.fieldName];
      }

    }

    lwc.registerDecorators(YouTubePlayerRecordWrapper, {
      publicProps: {
        fieldName: {
          config: 0
        },
        objectApiName: {
          config: 0
        },
        recordId: {
          config: 0
        }
      },
      wire: {
        record: {
          adapter: uiRecordApi.getRecord,
          params: {
            recordId: "recordId",
            fields: "fields"
          },
          static: {}
        }
      }
    });

    var youTubePlayerRecordWrapper = lwc.registerComponent(YouTubePlayerRecordWrapper, {
      tmpl: _tmpl$1
    });

    return youTubePlayerRecordWrapper;

});
