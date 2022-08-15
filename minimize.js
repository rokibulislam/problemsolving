function minimizeFunction(n, k, A) {
    var N = parseInt(n);
    var K = parseInt(k);
    var sorrtedArray = A.sort(function (n1, n2) { return n1 - n2; });
    A = sorrtedArray;
    var dp = new Array(N + 1)
        .fill(-1)
        .map(function () {
        return new Array(K + 1).fill(0);
    });
    console.log(dp);
    for (var i = 0; i < N; i++) {
        for (var j = 0; j <= K; j++) {
            if (j == 0) {
                dp[i][j] = 1000000000;
                continue;
            }
            else if ((i + 1) <= j) {
                dp[i][j] = 0;
                continue;
            }
            var temp = [];
            var answer = 1000000000;
            for (var l = i; l >= 0; l--) {
                temp.push(A[l]);
                var sorrtedArray2 = temp.sort(function (n1, n2) { return n2 - n1; });
                temp = sorrtedArray2;
                var contribution = 1000000000;
                var sum = 0;
                for (var m = 0; m < temp.length - 1; m++) {
                    sum += temp[m];
                }
                var ini_sum = 0;
                for (var m = 0; m < temp.length - 1; m++) {
                    sum -= temp[m];
                    //contribution = Math.min(contribution, (m * temp[m] - ini_sum + sum - ((temp.length) - m - 1) * temp[m]));
                    var t = m * temp[m] + ini_sum - sum + ((temp.length) - m) * temp[m];
                    contribution = Math.min(contribution, t);
                    ini_sum += temp[m];
                }
                if (l == 0) {
                    answer = Math.max(answer, contribution);
                }
                else {
                    answer = Math.max(answer, dp[l - 1][j - 1]);
                }
            }
            dp[i][j] = answer;
        }
    }
    return ("" + dp[N - 1][K]);
    // Return(""+dp[N-1][K]);
}
console.log(minimizeFunction('3', '1', [5, 7, 1]));
