ATC Quick — Flight Test Build
FAA NASR source cycle effective 2026-09-03.

Purpose: predict likely ATC handoffs/frequencies from a pre-entered route and cruise altitude.
This is a flight-test/planning aid, not an authoritative ATC source. Actual ATC assignments supersede predictions.

Known calibration route:
KHBI RAEFO KSUT at 7500 ft
Greensboro 126.6 -> Fayetteville 127.8 -> Fayetteville 133.0 -> Wilmington 118.25 -> KSUT CTAF.

Offline: install as a PWA and load once online. Route/frequency database and prediction code are local.
GPS can operate without cellular data after the app is installed/cached.

V4: rebuilt from original working prediction engine; blank home; visible in-app airport-name/identifier and waypoint search; Start Flight.

V5: fixed Origin search-results container bug. Get ATC Guidance calculates sequence; Start Flight separately starts GPS tracking.

V6: fixed fatal JavaScript duplicate-variable parse error that disabled search and Get ATC Guidance. Search panels span full width.

V7: focused cockpit guidance. One large likely-next facility/frequency, same-facility alternates grouped, one later facility, collapsible grouped full sequence. Existing GPS progression retained.

V8: full predicted route opens automatically; adjacent repeated facility frequencies are grouped on one line; one large LIKELY NEXT remains at top; GPS/manual handoff advances the highlighted route position.

V9: adds a one-tap current-facility frequency panel. It lists all frequencies in the packaged FAA service data for the current predicted facility, including associated airport/sector notes where available. The button follows LIKELY NEXT as the flight advances.

V10: removes facility-frequency popup/button. Each predicted-route facility row now shows its predicted frequency(s) prominently on the left and other known packaged FAA service frequencies for that same facility in smaller text on the right.

V11: new ATC Quick home-screen/app icon using the approved aircraft/tower artwork, cropped to remove the white outer area. App functionality remains v10.

V12: fixes route-row overlap when facilities have many OTHER frequencies. Main predicted frequencies stay in a protected left column; OTHER uses a fixed 42% right column, smaller text, wrapping, and automatic row height.

V13: route rows now use a strict CSS grid. OTHER frequencies are isolated in a 44% right column with a divider; each frequency is a nonbreaking token that wraps only between frequencies. This prevents long OTHER lists from overlapping the predicted facility/frequency column.

V14: adds Quick Frequency Search from the active flight screen. Search facility/city/airport/identifier (e.g. Atlanta or KATL) against packaged FAA data without changing the active route or GPS tracking. V13 route layout retained.

V15: moves Quick Frequency Search to the home screen so it can be used without entering a route, while retaining access on the active guidance screen. Search does not alter route or GPS state.

V16: Frequency Search is now a separate full-width button directly below the home route-planning card, and remains available during guidance.

V17: fixes Quick Frequency Search live input and airport-data lookup. Search now handles object- or array-shaped airport data and explicitly binds input/keyup events. Supports city/facility/airport identifier matches without changing route state.

V18: Frequency Search now uses an explicit Search button and Enter key instead of iOS live-input events. Lookup reads the actual airports object and services array directly.

V19: preserves the working v18 Frequency Search UI and adds domestic/ICAO airport identifier normalization, e.g. ATL/KATL and GSO/KGSO.

V20: preserves v19 identifier matching and Search button, and restores automatic frequency results while typing using input + keyup event fallbacks.

V21: airport identifiers now autocomplete from 3 characters (KGS -> KGSO/Greensboro, KAT -> KATL/Atlanta) and unrelated facility substring results are suppressed while entering identifiers.

V27: integrates Airport Quick USA airport-frequency database. Shows full departure frequencies, removes the duplicate current controller from Predicted Route, and shows full destination frequencies. ATC prediction engine/search/GPS remain v21-based.

V28: streamlined destination to arrival-use frequencies; removed destination CTAF duplicate from predicted route; non-towered departure card adds first predicted ATC controller/frequency (e.g. KHBI -> Greensboro).

V29: non-towered departure card includes first predicted controller; first controller removed from route; initial Likely Next advances to next handoff; towered destination is arrival-only; destination CTAF/Tower duplicate suppressed.

V30 deployment build: same corrected v29 behavior, explicit V30 visible marker and v30 service-worker cache name. Upload the contents of this new V30 folder; verify index.html and service-worker.js timestamps change before testing.

V31 hard-layout rules: non-towered departure card owns first predicted controller; initial LIKELY NEXT advances past it; predicted route suppresses local CTAF/Tower rows; towered destination card strictly ATIS/AWOS/ASOS/Approach/Tower/Ground only.

V33 AUDITED: rebuilt from V31. Added missing uniqueRows helper and display-only corrections. Prediction/search/GPS engine unchanged.

V35: removed only the redundant second Frequency Search button below LIKELY NEXT. All V33 route, airport-card, search, GPS, and prediction behavior preserved.

V36: Removed legacy LIKELY NEXT card display and changed service worker navigation to network-first with old-cache cleanup.

V42: V40-style destination simplified to one Runway Wind button; dedicated overlay shows all runway wind components.


V45: Keeps V44 layout and button; runway calculator now uses the exact V40 a.runways[].ends[] extraction path and captures the active destination airport when opened.

V46: Runway Wind results automatically sort the best headwind runway to the top and label it BEST WIND; all V45 runway graphics/calculations remain unchanged.

V47: Best-wind runway selection is now explicit before rendering; strongest headwind is forced into the first row and labeled BEST WIND.
