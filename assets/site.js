(function () {
    var root = document.documentElement;
    root.classList.add('js');

    // ---------- Theme toggle ----------
    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) {}
        });
    }

    // ---------- Mobile menu ----------
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-header nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open);
        });
        nav.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                nav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---------- Header border on scroll ----------
    var header = document.querySelector('.site-header');
    var onScroll = function () {
        if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---------- Active nav link ----------
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-menu a'));
    var sections = links
        .map(function (a) { var id = a.getAttribute('href').split('#')[1]; return id && document.getElementById(id); })
        .filter(Boolean);

    // ---------- Reveal on scroll ----------
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(function (el) { revealObserver.observe(el); });

        var navObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (a) {
                    a.classList.toggle('active', a.getAttribute('href').split('#')[1] === entry.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (s) { navObserver.observe(s); });
    } else {
        reveals.forEach(function (el) { el.classList.add('visible'); });
    }

    // ---------- Live download counters (NuGet search API, CORS enabled) ----------
    // Falls back silently to the static values rendered by Jekyll.
    var badges = document.querySelectorAll('[data-nuget]');
    var totalEl = document.querySelector('[data-total-downloads]');
    var format = function (n) { return n.toLocaleString('en-US'); };

    badges.forEach(function (b) {
        var n = parseInt(b.textContent, 10);
        if (!isNaN(n)) b.textContent = format(n);
    });

    if (!badges.length || !window.fetch) return;

    // EntityFieldsAnalyzer is an older package id of Entity Fields Analyser: counted in the total only.
    var ids = Array.prototype.map.call(badges, function (b) { return b.getAttribute('data-nuget'); }).concat(['EntityFieldsAnalyzer']);

    Promise.all(ids.map(function (id) {
        return fetch('https://azuresearch-usnc.nuget.org/query?q=packageid:' + encodeURIComponent(id) + '&prerelease=true')
            .then(function (r) { return r.json(); })
            .then(function (json) {
                var pkg = (json.data || []).find(function (d) { return d.id.toLowerCase() === id.toLowerCase(); });
                return { id: id, downloads: pkg ? pkg.totalDownloads : 0 };
            })
            .catch(function () { return { id: id, downloads: 0 }; });
    })).then(function (results) {
        var total = 0;
        results.forEach(function (res) {
            total += res.downloads;
            var badge = document.querySelector('[data-nuget="' + res.id + '"]');
            if (badge && res.downloads) badge.textContent = format(res.downloads);
        });
        if (totalEl && total) totalEl.textContent = Math.floor(total / 1000) + 'k+';
    });
})();
