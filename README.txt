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
