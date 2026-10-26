// Refreshes download counters from the NuGet search API (CORS enabled).
// Falls back silently to the static values rendered by Jekyll.
(function () {
    var ids = [
        'EntityFieldsAnalyser',
        'EntityFieldsAnalyzer',
        'BulkPrefixSuffixFieldsName',
        'DataverseCartographer',
        'SystemJobsDoctor',
        'DataverseRecordRecovery',
        'SolutionComponentExtractor',
        'MergeIt-RecordMergerForDataverse'
    ];
    var format = function (n) {
        return n >= 1000 ? Math.floor(n / 1000) + 'k+' : String(n);
    };

    Promise.all(ids.map(function (id) {
        return fetch('https://azuresearch-usnc.nuget.org/query?q=packageid:' + encodeURIComponent(id) + '&prerelease=true')
            .then(function (r) { return r.json(); })
            .then(function (json) {
                var pkg = (json.data || []).find(function (d) { return d.id.toLowerCase() === id.toLowerCase(); });
                return { id: id, downloads: pkg ? pkg.totalDownloads : 0 };
            });
    })).then(function (results) {
        var total = 0;
        results.forEach(function (res) {
            total += res.downloads;
            var badge = document.querySelector('[data-nuget="' + res.id + '"]');
            if (badge && res.downloads) {
                badge.textContent = res.downloads.toLocaleString('fr-FR') + ' téléchargements';
            }
        });
        var totalEl = document.getElementById('total-downloads');
        if (totalEl && total) {
            totalEl.textContent = format(total);
        }
    }).catch(function () { /* keep static values */ });
})();
