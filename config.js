var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoidGFtaWFvIiwiYSI6ImNtMWpqcjczdDEweHgya29rMXZtYWRsZm4ifQ.-FcCCKI8Wcwxi_C9iU9_fg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'Crime in Seattle, Washington',
    subtitle: 'Exploring Crime Patterns and Police Response in Washington State',
    byline: 'Tony Ngo and Tamia Ouch',
    footer: 'Source: Seattle Open Data. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Crime Data In Seattle From 2010',
            image: 'https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'Prior to 2010 many gun laws were established that impacted the gun use that year. <br> For example, the Protection of Lawful Commerce in Arms Act was signed by President George Bush to prevent gun manufacturers from being named in federal or state suits, as well as the National Instant Criminal Background Check Improvement Act was signed that required background checks for gun-buyers and prohibitted the mentallly ill from purchasing firearms. <br> After George Bushes term, President Barack Obama signed a federal law that allowed gun owners to bring firearms into national parks (Gray, S 2018). <br>  "Gray, S. (2019, April 30). A timeline of gun control laws in the U.S. Time. https://time.com/5169210/us-gun-control-laws-history-timeline/"',
            location: {
                center: [-122.33594, 47.60132],
                zoom: 11.7,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: '2010-tract', opacity: 0.8},
                {layer: '2023-tract', opacity: 0},
                {layer: '2015-tract', opacity: 0},
                {layer: '2010-heatmap', opacity: 1},
                {layer: '2010-points', opacity: 1},
                {layer: '2015-heatmap', opacity: 0},
                {layer: '2015-points', opacity: 0},
                {layer: '2023-heatmap', opacity: 0},
                {layer: '2023-points', opacity: 0},              
            ],
            onChapterExit: [
                {layer: '2010-tract', opacity: 0},
                {layer: '2010-heatmap', opacity: 0},
                {layer: '2010-points', opacity: 0},
                {layer: '2023-points', opacity: 0},
                {layer: '2023-tract', opacity: 0},
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Crime Data In Seattle From 2015',
            image: 'https://images.pexels.com/photos/270220/pexels-photo-270220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'From 2010 to 2015 many events occurred. <br>For example, the tragic Sandy Hook school shooting occured creating great fear in society about gun usage, the Indetectable Firearms Act of 1988 that required all guns have enough metal to be detected was extended until 2035, and a specific procedure was mandated for background checks for gun sales to avoid loopholes (Longley, 2023). <br> "Longley, R. (2023, January 8). See a timeline of gun control in the U.S. from 1791 to the present. ThoughtCo. https://www.thoughtco.com/us-gun-control-timeline-3963620"',
            location: {
                center: [-122.33594, 47.60132],
                zoom: 11.7,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: '2015-tract', opacity: 0.8},
                {layer: '2015-heatmap', opacity: 1},
                {layer: '2015-points', opacity: 1}
            ],
            onChapterExit: [
                {layer: '2015-tract', opacity: 0},
                {layer: '2015-heatmap', opacity: 0},
                {layer: '2015-points', opacity: 0},
                {layer: '2023-heatmap', opacity: 1},
                {layer: '2023-points', opacity: 1 },
                {layer: '2023-tract', opacity: 1}
            ]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Crime Data In Seattle From 2023',
            image: 'https://images.pexels.com/photos/1464235/pexels-photo-1464235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description: 'From 2015 to 2023 many events occured including, the banning of assault style weapons with high-yield magazines, Donald Trump served his term and supported the banning of sales on "bump fire stocks" that make semi-automatic weapons automatic, and Judge Robert Lasnik in Seattle issued a temporary ban on untraceable and undetectable plastic gun blueprints (Longley, 2023). <br> "Longley, R. (2023, January 8). See a timeline of gun control in the U.S. from 1791 to the present. ThoughtCo. https://www.thoughtco.com/us-gun-control-timeline-3963620 "',
            location: {
                center: [-122.33594, 47.60132],
                zoom: 11.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: '2023-heatmap', opacity: 1 },
                { layer: '2023-points', opacity: 1 },
                { layer: '2023-tract', opacity: 0.8 },
            ],
            onChapterExit: [
                {layer: '2023-heatmap', opacity: 0},
                {layer: '2023-tract', opacity: 0},
                {layer: '2023-points', opacity: 0}
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-122.33594, 47.60132],
                zoom: 11.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: '2010-tract', opacity: 0.8 }, 
                { layer: '2015-tract', opacity: 0.8 },
                { layer: '2023-tract', opacity: 0.8 }, 
                { layer: '2010-heatmap', opacity: 1 }, 
                { layer: '2015-heatmap', opacity: 1 }, 
                { layer: '2023-heatmap', opacity: 1 }, 
                { layer: '2010-points', opacity: 1 }, 
                { layer: '2015-points', opacity: 1 }, 
                { layer: '2023-points', opacity: 1 }, 
            ],
            onChapterExit: [
                { layer: '2010-tract', opacity: 0 }, 
                { layer: '2015-tract', opacity: 0 },
                { layer: '2023-tract', opacity: 0 }, 
                { layer: '2010-heatmap', opacity: 0 }, 
                { layer: '2015-heatmap', opacity: 0 }, 
                { layer: '2023-heatmap', opacity: 0 }, 
                { layer: '2010-points', opacity: 0 }, 
                { layer: '2015-points', opacity: 0 }, 
                { layer: '2023-points', opacity: 0 }, 
            ]
        }
    ]
};
