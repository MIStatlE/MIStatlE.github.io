---
layout: page
title: Articles
permalink: /articles/
---

> 收录较长的文章、综述、长篇笔记。适合长期引用与学术场景。

<ul>
  {% assign items = site.articles | sort: 'date' | reverse %}
  {% for a in items %}
    <li>
      <a href="{{ a.url | relative_url }}">{{ a.title }}</a>
      <small>— {{ a.date | date: "%Y-%m-%d" }}</small>
    </li>
  {% endfor %}
</ul>
