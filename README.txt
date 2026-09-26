ATC Quick V79

Current base: V79

Preserved from V70/V69/V68/V66:
- ATC route prediction and altitude-aware logic
- GPS PASSED / CURRENT / AFTER route status
- WHO CAN I CALL? GPS ATC lookup
- Expanded public/private airport details and private-strip contacts
- Default cruise altitude 8,000 ft
- Fly-In Food state browser with ON FIELD / OFF FIELD filters
- Museums state browser with ON FIELD / OFF FIELD filters

V71 North Carolina database build:
- Expanded NC ON FIELD food listings, including JNX, BQ1, MWK, FQD, 5W4, 60J and RDU.
- Added real NC OFF FIELD restaurant records near 60J with distance/rating/phone where available.
- Added NC ON FIELD museum destinations at HBI, HKY and FFA.
- Added NC OFF FIELD museum records at CLT and 60J, while preserving MWK, JNX and FQD entries.
- Removed no working features from V70.

Restaurant and museum listings are convenience data. Verify current hours, access, transportation and operating status before flight.

V72 NC food expansion:
- Added more verified OFF FIELD NC entries (including HKY and 5W4).
- Grouped restaurant results by airport so it is obvious when multiple airports are represented.
- Added a summary count for restaurants and airports in the active filter.

V73 food UI:
- State counts now show ON-FIELD restaurant count only.
- OFF FIELD is fixed at <=2 miles.
- OFF FIELD lists airport identifiers first; tap an airport to see its nearby restaurants.

V74 cache fix:
- Food UI remains OFF FIELD <= 2 miles only with airport-first listing.
- Updated service-worker registration from stale v71 to v74.
- updateViaCache:none and no-store navigation fetch reduce stale Home Screen builds.
- Manifest start URL updated to v74.

V77 North Carolina off-field restaurant expansion:
- OFF FIELD remains fixed at 2 miles.
- Added AVL, AKH, PGV, EWN and SOP restaurant groups.
- NC now has a much larger airport-indexed off-field list.

V78 museum rebuild:
- Replaced uneven state museum totals with one consistent nationwide lookup rule.
- ON FIELD = separately verified airport-property museums.
- OFF FIELD = museums from the IMLS Museum Universe Data File within 5 statute miles of an FAA airport.
- All 50 states are active; a state count appears only after that state is actually checked.
- OFF FIELD is grouped by airport identifier first, then museum list.
- If the nationwide source is unavailable, the app falls back to the smaller curated offline list.
- Core ATC, restaurant, airport, private-strip, runway and GPS features are unchanged.


V79 museum UI rollback/fix:
- Restored the V77-style museum state behavior.
- State tiles show the available museum count immediately; no per-state nationwide loading step.
- Tapping a state immediately shows the museum list with ON FIELD / OFF FIELD filters.
- Preserved all other V78 ATC, airport, food, private-strip, runway and GPS features.


V81 nationwide museum balance fix:
- Fixes the uneven museum totals that made North Carolina look artificially far ahead of Virginia and other states.
- Uses one nationwide IMLS Museum Universe lookup and the same rule for every state.
- OFF FIELD = museum within 5 statute miles of an open, public-use, non-military FAA airport.
- ON FIELD remains separately verified airport-property museums.
- Nationwide counts load automatically for all states; no state-by-state "tap to load" step.
- Results are cached locally after the first successful nationwide load so later openings are immediate.
- Excludes IMLS HSC-only historical-society/preservation records to reduce organizations that are not actually visitable museums.
- Keeps hand-checked museum entries as a fallback if the nationwide source is unavailable.


V81 museum fix: replaced the retired Carto museum endpoint with a stable nationwide CSV mirror plus fallback; changed cache key so old V80 museum counts cannot persist.


V85 nationwide ON-FIELD restaurant build:
- Fly-In Food is ON FIELD only for this build; OFF FIELD is intentionally deferred to the next phase.
- All 50 states are active.
- Uses Fly2Lunch's live on-airport restaurant search and the local FAA airport database to cover each state's airports.
- State results are cached locally for 365 days; first nationwide load populates progressively in the background.
- Existing hand-checked NC/VA/GA/SC on-field entries remain as an offline fallback and are merged/deduplicated with live results.
- State tiles show live on-field restaurant counts as each state completes.
- Restaurant listings remain convenience data; call ahead to verify hours, airport access, and that the restaurant is still operating.


V85: Added OFF FIELD restaurant mode within 5 miles of open public-use airports. VA/NC/SC preload automatically; all other states are click-to-load. OFF FIELD source is OpenStreetMap via Overpass and caches per state for one year.
