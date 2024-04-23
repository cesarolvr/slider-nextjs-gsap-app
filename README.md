
## 📸 xyzphotography
This test consists of a page with 1 major components: Working as Slider/Carousel to show some arts (photographs).

### Demo
Link soon...

### What was used

- **React** - Because it's interface library I have more knowledge/experience.
- **NextJS** - To generate static files and serve it as a SSG application. I choose this approach because it would be a simple project and its suppose to be a fast webpage.
- **TypeScript** - To type the code.
- **Classnames** - To bind CSS classes based a given state.
- **Framer Motion** - To be honest, I never used it before but I accepted the challengde. Just loved it.
- **GSAP** - No justification here. It's just one of the better solutions for animations (in my opinion). But was my first time using ScrollTrigger. I used to create with ScrollMagic instead.
- **Styled Components** - To allow me write CSS-in-JS. I used to build all this interactions only with vanilla CSS, but to be honest I don't have a favorite.
- **Jest** - To run my tests pipeline and create some unit tests.
- **GitHub Actions** - To deploy and also to run the tests automatically when updating main or opening new PR.
- **AWS** - To serve.

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

**Run the tests:**
The tests pipeline will be triggered automatically when you push the branch `main` in GitHub. But it's also possible to run them locally.

*Unit tests:*
```shellscript
yarn test:jest
```

**How to deploy new version:**
Just push in the branch `main`.
