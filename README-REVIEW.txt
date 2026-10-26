# DharmBodh Panchang — Review Package

## Files
- `index.html`: review copy of the homepage with safer IST date/weekday handling, periodic refresh, and explicit status when the API does not confirm current-time basis.

## Important limitation found during review
The homepage currently calls this Cloudflare Worker:
`https://dharmbodh-panchang.taruncool8647.workers.dev/`

The Worker source code was not present in the available project files, and the endpoint could not be inspected in this session. The homepage can send `date`, `time`, `timezone=Asia/Kolkata`, and `basis=current` parameters, but it cannot force a Worker that ignores those parameters to calculate the active tithi/nakshatra/yoga/karana.

Therefore this package is a **review proposal**, not a claim that the full live-time calculation is already verified. Before publishing, the Worker must be checked/updated to:
1. accept the passed IST date/time (or compute the current moment itself),
2. calculate tithi, paksha, nakshatra, yoga and karana for that exact moment in New Delhi (28.6139, 77.2090; timezone Asia/Kolkata),
3. return `basis: "current"` only when it truly represents the current moment,
4. include CORS headers and avoid returning sunrise-based values as if they were current-time values.

## Safety
No GitHub repository or live website was changed. Review `index.html` first. Do not upload it until you approve the changes and the Worker behavior has been addressed.
