trace1 = {
              type: 'scatter',
              x: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, ],
                  y: [20049,27092,30646,28955,32200,38712,41037,46946,51324,57275,62804,64966,64751,78426,83326,84297,127555,97366,120462,119329,117421],
                  mode: 'lines',
                  name: 'Red',
                  line: {
                  color: '#820333',
                  width: 2
                  }
              };

            var data = [trace1];
            var layout = {
              title: 'Evolution of the number of crime related to cannabis trafficking in France',
              xaxis: {
                title: 'Year'
              },
              yaxis: {
                title: 'Number of arrest'
              },
              };
              Plotly.newPlot('plot_crime', data, layout, {displayModeBar: false});