import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const timeFormat = d3.timeFormat("%H:%M");

const LineChart = (props: {
    datas: any[]
}) => {
    // const [datas] = useState(props.datas);
    const [datas] = useState([
        {time: 1607413425097, score: 20},
        {time: 1607414429214, score: 50},
        {time: 1607415121362, score: 100},
        {time: 1607415446935, score: 80}
    ]);
    const ref = useRef<SVGSVGElement>(null);
        
    // const parseTime = d3.timeParse('%s');
    // const timeFormat = d3.timeFormat("%Y-%m-%d %H:%M");
    

    // console.log('測試 parseTime', parseTime("1607326845882"));
    // console.log('測試 timeFormat', timeFormat(new Date(1607326845882)));

    useEffect(() => {
        const margin = ({top: 20, right: 10, bottom: 20, left: 40});
        const width = document?.querySelector('#root .container')?.clientWidth ?? 300;
        const height = 250;
        
        console.log('datas', datas);
        const newData: any = [...datas];

        // newData.forEach((d: any) => {
        //     // d.time = timeFormat(new Date(d.time));
        //     d.time = d.time;
        //     // d.time = parseTime(d.time);
        //     // d.time = new Date(d.time);
        //     d.score = d.score;
        // })
        
        const minTime: any = d3.min(newData, (d: any) => d.time);
        const maxTime: any = d3.max(newData, (d: any) => d.time);
        // const min: any = d3.min(datas, (d) => d.score);
        // const max: any = d3.max(datas, (d) => d.score);
    
    
        console.log('transformData newData', newData);

        let svgElement: any = null;
    
        // ranges
        // const x = d3.scaleTime()
        //     .domain([minTime, maxTime])
        //     .range([margin.left, width - margin.right]);
        const x: any = d3.scaleTime()
            // .range([0, width])
            .range([margin.left + 10, width - margin.right])
            .domain([minTime, maxTime]);

        const y = d3.scaleLinear()
            .range([height - margin.bottom, margin.top])
            .domain([0, 100]);
        
        const drawline = d3.line()
            .curve(d3.curveMonotoneX)
            .x((d: any) => { return x(d.time) })
            .y((d: any) => { return y(d.score) })

    
        // const HEIGHT = 300;
        svgElement = d3.select(ref.current)
        svgElement.attr("viewBox", [0, 0, width, height]).attr('class', 'line-chart');

        svgElement.append("g")
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            // .attr('transform', `translate(${margin.left}, ${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat((d: any) => timeFormat(d)).tickSizeOuter(0).tickSizeInner(0).tickPadding(10));

        svgElement.append("g")
            .attr('class', 'y-axis')
            .attr('transform', `translate(${margin.left}, 0)`)
            // .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickSizeOuter(0).tickSizeInner(0).tickPadding(10));
            .call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(15));
            // tickSize(-width) 畫出每條橫軸
            // tickPadding  每一個 y 軸上文字與橫線的間距
            // ticks 要拆幾格
        
    
        // remove both underline
        svgElement.selectAll(".domain").remove();
        svgElement.select('.domain').attr("stroke", "#999")
        svgElement.selectAll('.x-axis text').attr('style', 'font-size: 12px;color: #999;font-weight: 500;');
        svgElement.selectAll('.y-axis text').attr('style', 'font-weight: bold;color: #999;');
        svgElement.selectAll('.y-axis path').attr('stroke', '#999').attr('stroke-width', 1);
        svgElement.selectAll('.y-axis .tick line').attr('stroke', '#ebe9e6').attr('stroke-width', 2).attr('opacity', 0.5);


        // Set the gradient
        svgElement.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .selectAll("stop").data([
                { offset: "0%", color: "#ffa00b"},
                { offset: "100%", color: "#42605e"
            }])
            .enter().append("stop")
            .attr("offset", function(d: any) { return d.offset; })
            .attr("stop-color", function(d: any) { return d.color; });

        svgElement.append('path')
            .attr('class', 'line')
            .attr("stroke", "url(#line-gradient)")
            .attr("stroke-width", 3)
            .attr("fill", "none")
            // http://www.d3noob.org/2014/02/styles-in-d3js.html
            .style("stroke-linecap", "round")
            // .attr("stroke-linejoin", "round")
            // cornerRadius
            .attr('d', drawline(newData));
        
        
        // filters go in defs element
        // https://observablehq.com/@bumbeishvili/svg-drop-shadows
        var defs = svgElement.append("defs");
        var filter = defs.append("filter")
            .attr("id", "drop-shadow")
            .attr('height', height)
        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 4)
            .attr("result", "blur");
        
            filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 0)
            .attr("dy", 15)
            .attr("result", "offsetBlur");
        var feMerge = filter.append("feMerge");
        
        feMerge.append("feMergeNode").attr("in", "offsetBlur")
        feMerge.append("feMergeNode").attr("in", "SourceGraphic");

        svgElement.append('path')
            .attr('class', 'line-shadow')
            .attr("stroke", "#f3f3f3")
            // .attr("stroke", "url(#line-gradient)")
            .attr("stroke-width", 3)
            // .attr('transform', 'translate(0, 12)')
            .attr('opacity', 0.2)
            .attr("fill", "none")
            // http://www.d3noob.org/2014/02/styles-in-d3js.html
            .style("stroke-linecap", "round")
            .style("filter", "url(#drop-shadow)")
            .attr('d', drawline(newData));
    }, [datas]);

    return (
        <div className="line-chart-container">
            <svg ref={ref}></svg>
        </div>
    )

}
export default LineChart;