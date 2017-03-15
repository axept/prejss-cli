export default {
  ".user-reactions": {
    "position": "relative",
    "zIndex": "10",
    "&__list": {
      "height": "40px * 0.8",
      "boxShadow": "0 3px 4px rgba(0, 0, 0, 0.15), 0 0 8px rgba(0, 0, 0, .04)",
      "position": "absolute",
      "right": "-20px",
      "top": "10px",
      "zIndex": "100",
      "background": "#ffffff",
      "listStyle": "none",
      "padding": "3px",
      "whiteSpace": "nowrap",
      "lineHeight": "0",
      "userSelect": "none",
      "borderRadius": "40px * 0.8 / 2 + 2px",
      "&::after": {
        "content": "''",
        "position": "absolute",
        "height": "100%",
        "width": "100%",
        "padding": "10px 0",
        "left": "0",
        "top": "-10px",
        "zIndex": "-1"
      }
    },
    "&__icon": {
      "display": "inline-block",
      "width": "40px",
      "height": "40px",
      "bottom": "(1 - 0.8) * 40px",
      "margin": "0 0 7px 0",
      "cursor": "pointer",
      "position": "relative",
      "transform": "scale3d(0.8, 0.8, 0.8)",
      "msTransform": "scale(0.8)",
      "transformOrigin": "bottom",
      "backgroundColor": "white",
      "borderRadius": "50%",
      "@media (max-width: 380px)": {
        "&:first-child": {
          ".title": {
            "left": "0",
            "transform": "none !important"
          }
        },
        "&:last-child": {
          ".title": {
            "right": "0",
            "left": "auto",
            "transform": "none !important"
          }
        }
      },
      "&-status": {
        "width": "21px !important",
        "height": "21px !important",
        "margin": "0 !important",
        "bottom": "3px !important",
        "cssFloat": "left"
      },
      "&.selected": {
        "transform": "scale3d(1, 1, 1)",
        "msTransform": "scale(1)",
        ".title": {
          "display": "block"
        }
      },
      ".title": {
        "position": "absolute",
        "top": "-24px",
        "left": "50%",
        "transform": "translateX(-50%)",
        "whiteSpace": "nowrap",
        "backgroundColor": "rgba(0, 0, 0, 0.7)",
        "color": "#ffffff",
        "fontSize": "12px",
        "lineHeight": "20px",
        "borderRadius": "10px",
        "padding": "0 5px",
        "display": "none"
      },
      "&.smile1": {
        "backgroundImage": "url(\"../images/emotions-icons/smile1.svg\")"
      },
      "&.smile2": {
        "backgroundImage": "url(\"../images/emotions-icons/smile2.svg\")"
      },
      "&.smile3": {
        "backgroundImage": "url(\"../images/emotions-icons/smile3.svg\")"
      },
      "&.smile4": {
        "backgroundImage": "url(\"../images/emotions-icons/smile4.svg\")"
      },
      "&.smile5": {
        "backgroundImage": "url(\"../images/emotions-icons/smile5.svg\")"
      },
      "&.smile6": {
        "backgroundImage": "url(\"../images/emotions-icons/smile6.svg\")"
      },
      "&.smile7": {
        "backgroundImage": "url(\"../images/emotions-icons/smile7.svg\")"
      }
    }
  }
}