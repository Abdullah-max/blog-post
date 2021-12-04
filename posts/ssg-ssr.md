---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-01-02"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

![Demo](/image/test.jpg "this is a demo image")
[The caption for my image](/)

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

[**1. We are human.**](https://en.wikipedia.org/wiki/Human)

Humans (Homo sapiens) are the most abundant and widespread species of primate, characterized by bipedalism and large, complex brains. This has enabled the development of advanced tools, culture, and language.

[**2. We are Muslim**](https://en.wikipedia.org/wiki/Muslims)

Muslims are people who follow or practice Islam, an Abrahamic monotheistic religion. The word "Muslim" derives from Arabic and means "submitter (to God)". Muslims consider the Quran...

[**See more**](pre-rendering)
