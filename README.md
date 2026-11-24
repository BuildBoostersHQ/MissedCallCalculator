# Missed Call Cost Calculator

**A free, open-source, embeddable calculator that shows contractors and home service businesses what unanswered calls cost them in a year.** One script tag, no dependencies, about 4 KB. Built and maintained by [Build Boosters](https://buildboosters.com).

Live demo: [buildboostershq.github.io/MissedCallCalculator](https://buildboostershq.github.io/MissedCallCalculator/) · Full version: [buildboosters.com/missed-call-calculator](https://buildboosters.com/missed-call-calculator)

## How it works

It uses what we call the missed-call math:

```
missed calls per week × 52 weeks × close rate × average job = revenue lost per year
```

At the defaults (3 missed calls a week, a 20% close rate and a $1,500 average job) that comes to $46,800 a year, or about 31 jobs. The reasoning behind each number is in [What Missed Calls Really Cost Contractors](https://buildboosters.com/missed-calls-cost-contractors).

## Embed it

```html
<div data-missed-call-calculator></div>
<script src="https://buildboostershq.github.io/MissedCallCalculator/embed.js" async></script>
```

You can put several on one page. Options go on the `div`:

| Attribute | Default | What it does |
| --- | --- | --- |
| `data-calls` | `3` | Starting missed calls per week (1 to 20) |
| `data-job` | `1500` | Starting average job value ($500 to $10,000) |
| `data-close` | `20` | Starting close rate in percent (10 to 50) |
| `data-theme` | `dark` | `dark` or `light` |
| `data-accent` | `#f2a20c` | Accent color as a hex value |

Prefer to host it yourself? Copy `embed.js` into your project and change the `src`.

## Who it's for

- Contractors who want the calculator on their own site
- Agencies and freelancers who build sites for home service businesses
- Anyone writing about missed calls, speed-to-lead or [missed-call text-back](https://buildboosters.com/what-is-missed-call-text-back)

## Accessibility

Every slider has a label, the result updates in an `aria-live` region, and it works with a keyboard.

## License

MIT. See [LICENSE](LICENSE). Keeping the small "Calculator by Build Boosters" credit is appreciated but not required.

## More free resources for contractors

These tools are maintained by [Build Boosters](https://buildboosters.com), which builds websites and follow-up systems for contractors and home service businesses.

- [Contractor website checklist](https://buildboosters.com/contractor-website-checklist): 20 things every contractor site needs, with a printable PDF
- [What makes a good contractor website](https://buildboosters.com/what-makes-good-contractor-website): 10 things homeowners look for before they call
- [Missed call cost calculator](https://buildboosters.com/missed-call-calculator): see what unanswered calls cost a contracting business in a year
- [What is missed-call text-back?](https://buildboosters.com/what-is-missed-call-text-back): how the automatic text works and how to set it up
- [How to get more Google reviews](https://buildboosters.com/how-to-get-more-google-reviews): a simple routine that works without breaking Google's rules
- [Ranking on Google Maps](https://buildboosters.com/google-maps-ranking-contractors): what Google says decides the map results
- [Contractor marketing glossary](https://buildboosters.com/contractor-marketing-glossary): 37 marketing terms in plain English
- [Free demo website](https://buildboosters.com/#build): type your business name and see a demo of your own site

Questions or ideas? Open an issue, or call or text Build Boosters at (786) 479-8856.
