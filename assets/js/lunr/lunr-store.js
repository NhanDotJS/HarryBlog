var store = [{
        "title": "Hi Babe",
        "excerpt":"Hi Babe   This is a start of something new, something great, something that will change the world.   And there are much more to come, stay tuned for things to come…  ","categories": ["Uncategorized"],
        "tags": [],
        "url": "/HarryBlog/uncategorized/Test/",
        "teaser": "/HarryBlog/assets/images/dog1.png"
      },{
        "title": "Good Morning",
        "excerpt":"Good Morning Bae! I love you &lt;3 Nhưng mà anh thức đến giờ này chắc là hem kịp dậy good morning cục cưng của anh rồi nên là anh sẽ để cái này ở đây cho em đọc sau khi em dậy nhé. Em yêu đi làm thật vui! Anh...","categories": ["Messages"],
        "tags": [],
        "url": "/HarryBlog/messages/Good-Morning/",
        "teaser": null
      },{
    "title": "404 Page Not Found",
    "excerpt":"Uh Oh, We can’t find the page you’re looking for.   It’s alright, take my hand and I’ll take you back home.  ","url": "https://nhandotjs.github.io/HarryBlog/404.html"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "https://nhandotjs.github.io/HarryBlog/categories/"
  },{
    "title": null,
    "excerpt":"","url": "https://nhandotjs.github.io/HarryBlog/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "https://nhandotjs.github.io/HarryBlog/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "https://nhandotjs.github.io/HarryBlog/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "https://nhandotjs.github.io/HarryBlog/assets/js/lunr/lunr-store.js"
  },{
    "title": "Sitemap",
    "excerpt":"A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ \"sitemap.xml\" | relative_url }}) available for digesting as well. Pages {% for post in site.pages %} {% include archive-single.html %} {% endfor %} Posts {% for post in site.posts...","url": "https://nhandotjs.github.io/HarryBlog/sitemap/"
  },{
    "title": "Posts by Tag",
    "excerpt":"","url": "https://nhandotjs.github.io/HarryBlog/tags/"
  },{
    "title": "Posts by Year",
    "excerpt":"","url": "https://nhandotjs.github.io/HarryBlog/year-archive/"
  },{
    "title": null,
    "excerpt":"@import \"jekyll-theme-primer\"; ","url": "https://nhandotjs.github.io/HarryBlog/assets/css/style.css"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "https://nhandotjs.github.io/HarryBlog/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "https://nhandotjs.github.io/HarryBlog/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "https://nhandotjs.github.io/HarryBlog/feed.xml"
  }]
