ATC Quick V75

Current base: V75

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

V75 North Carolina off-field restaurant expansion:
- OFF FIELD remains fixed at 2 miles.
- Added AVL, AKH, PGV, EWN and SOP restaurant groups.
- NC now has a much larger airport-indexed off-field list.
