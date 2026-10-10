# Second Plate

Marketing site for [Second Plate](https://www.secondplate.co.za/), a catering company that also runs cooking classes for adults, teens, and children. Classes are held in Polokwane and surrounding areas. The address published on the live site is 5th Floor, Bloukrans Building, Lynnwood Bridge, Pretoria, 0081.

Wording, phone, email, class listings, and photographs come from the public pages on secondplate.co.za. Images were downloaded from that site and resized for the web. The wordmark is the logo already used there, not a redraw.

The live privacy policy and accessibility pages are unfinished Wix templates with placeholder instructions, so they are not republished here as company policy.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

The contact form is presentational. It does not send a message. Guests should call 071 355 7557 or email info@secondplate.co.za.

## Publish on Netlify

The site does not have a public address until it is deployed. Netlify can build this repository.

1. Sign in at [Netlify](https://www.netlify.com/) and choose Add new site, then Import an existing project.
2. Select this GitHub repository and the branch you want to publish.
3. Build command: `npm run build`. Leave the publish directory empty so Netlify’s Next.js runtime serves the app.
4. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to the Netlify address (for example `https://your-site.netlify.app`) and redeploy. Sitemap and social preview links use that value.

Deploying does not connect the contact form to a mailbox.
