queue()
    .defer(d3.csv, "data/WorldCups.csv")
    .await(makeGraphs);
    
function makeGraphs(error, cupData) {
    var ndx = crossfilter(cupData);
    
      show_number_winners(ndx);
      show_number_runners(ndx);
      show_number_hosts(ndx);
      
      
      
     
      
    
    dc.renderAll();
}


function show_number_winners(ndx) {
    var dim = ndx.dimension(dc.pluck('Winner'));
    var group = dim.group();
    
    dc.barChart("#number-winners")
        .width(600)
        .height(400)
        .margins({top: 10, right: 50, bottom: 30, left: 100})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxis().ticks(20);
}

function show_number_runners(ndx) {
    var dim = ndx.dimension(dc.pluck('Runners-Up'));
    var group = dim.group();
    
    dc.barChart("#number-runners")
        .width(600)
        .height(400)
        .margins({top: 10, right: 50, bottom: 30, left: 100})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxis().ticks(20);
}

function show_number_hosts(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();
    
       dc.rowChart("#number-hosts")
        .width(1500)
        .height(500)
        .margins({top: 10, right: 50, bottom: 30, left: 100})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
       
   
}







