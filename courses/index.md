---
layout: page
title: Courses
permalink: /courses/
---

> 这里汇总你的课程资料（教材、讲义、作业、参考书）。

<ul>
  {% assign cs = site.courses | sort: 'title' %}
  {% for c in cs %}
    <li>
      <a href="{{ c.url | relative_url }}">{{ c.title }}</a>
      {% if c.semester %}<small>— {{ c.semester }}</small>{% endif %}
    </li>
  {% endfor %}
</ul>
