
## 📸 xyzphotography
This challenge consists of a page with 1 major component: A kind of Slider/Carousel to show some arts (photographs).

### Demo
[xyzphotography.cesarolvr.com.br](https://xyzphotography.cesarolvr.com.br)

### What was used

- **React** - Because it's interface library I have more knowledge/experience.
- **NextJS** - To generate static files and serve it as a SSG application. I choose this approach because it would be a simple project and its suppose to be a fast webpage.
- **TypeScript** - To type the code.
- **Classnames** - To bind CSS classes based a given state.
- **Framer Motion** - To be honest, I never used it before but I accepted the challengde. Just loved it.
- **GSAP** - No justification here. It's just one of the better solutions for animations (in my opinion). But was my first time using ScrollTrigger, and when I needed to work with timelines I chose ScrollMagic instead.
- **Styled Components** - To allow me write CSS-in-JS. During most part of my career I did all this interactions only with vanilla CSS, but to be honest I don't have a favorite. Styles Components fit well here.
- **Jest** - Soon...
- **GitHub Actions** - To deploy and also to run the tests automatically when updating main or opening new PR.
- **AWS** - To serve. I uploaded on a simple S3 bucket, with a CDN in front of it (Cloudfront).

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
Just push in the branch `main`.
