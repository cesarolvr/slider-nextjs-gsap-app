
## 📸 xyzphotography
This challenge consists of a page with 1 major component: A kind of Slider/Carousel to show some arts (photographs).

### Demo
[xyzphotography.vercel.app](https://xyzphotography.vercel.app/)

### What was used

- **React** - Because it's interface library I have more knowledge/experience.
- **NextJS** - To generate static files and serve it as a SSG application. I choose this approach because it would be a simple project and its suppose to be a fast webpage.
- **TypeScript** - To type the code.
- **Classnames** - To bind CSS classes based a given state.
- **Framer Motion** - To be honest, I never used it before but I accepted the challengde. Just loved it.
- **GSAP** - No justification here. It's just one of the better solutions for animations (in my opinion). But was my first time using ScrollTrigger, and when I needed to work with timelines I chose ScrollMagic instead.
- **Styled Components** - To allow me write CSS-in-JS. During most part of my career I did all this interactions only with vanilla CSS, but to be honest I don't have a favorite. Styles Components fit well here.
- **Cypress** - To E2E tests: Still working on it...
- **Jest** - To unit tests: Still working on it...
- **Vercel** - Just to serve.

### Ongoing work
Tasks I would see as future improvements.

- **Unit tests** - It's hard to write unit tests now because the main functions are't pure, and it makes harder to test input/output. Working on it...
- **Nice domain** - The plan was deploy with https://xyzphotography.cesarolvr.com but I'm still validating a certificate to this subdomain. Just a detail...
- **Lighthouse** - There are some possible savings on mobile devices. Anyway, the current version is not that bad.
- **Responsiveness** - My focus was mainly about mobile (<425px) and desktop (>992px), so maybe in middle-sizes screen the interface could be better.
- **CSS unnecessary overrides** - There are a few !important statements to override framer-motion/gsap transforms. I know is not ideal, but in this case won't be that game changer.
- **Animation performance** - I also tested from a low-end smartphone and middle-end laptop and I see opportunities to optimize the fluidity of some animations.

### Getting started

**Run:**
```javascript
yarn
yarn dev
```
This will start application in development mode.

**Build and serve:**
```javascript
yarn build
yarn start
```
This will generate static files and serve in a local server.

**How to deploy new version:**
Just run `vercel deploy`.
