This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:
```bash
npm i
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Notes on the Project

- First time using Ant Design. I've seen it before, but haven't used it before.
- I waffled back and forth on including Emotion (CSS). I personally prefer CSS-in-JS, but I didn't want to
spend the time getting it fully running with Ant Design.
- Quite a bit of my time was spent trying to target the modal background in the CSS!
- The magic sauce was:
```css
.modal-wrapper .ant-modal-content {
  padding: 0;
}
```
- Working within a CSS framework is fun for pre-built styles and components, but I usually prefer not to
because often you end up spending so much time trying to override the default styles.
- I was unable to target specific styles for breakpoints (or the xs, sm, md, lg, xl). For instance, the
text should be smaller on phones/tablets, etc. I wanted to finish quickly, so I ignored looking
how to override this.
- I had a lot of fun! It's fun to program again after having not done it for so long.
