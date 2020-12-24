import { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = (props: {
    datas: any[]
}) => {
    const [datas] = useState(props.datas);
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const timeFormat = d3.timeFormat('%H:%M:%S');
        const margin = ({top: 20, right: 10, bottom: 20, left: 40});
        const width = document?.querySelector('#root .container')?.clientWidth ?? 300;
        const height = 250;

        const newData: any = [...datas];
        newData.forEach((d: any) => {
            // formar time
            // console.log('parseTime', parseTime("1607326845882"));
            // console.log('timeFormat', timeFormat(new Date(1607326845882)));
            d.time = timeFormat(d.time);
        });
        
        // const minTime: any = d3.min(newData, (d: any) => d.time);
        // const maxTime: any = d3.max(newData, (d: any) => d.time);
        // const min: any = d3.min(datas, (d) => d.score);
        // const max: any = d3.max(datas, (d) => d.score);

        let svgElement: any = null;
    
        // ranges
        
        // if want to use time as scale
        // const x: any = d3.scaleTime()
        //     .range([margin.left + 10, width - margin.right])
        //     .domain([minTime, maxTime]);

        // if want to use category as scale
        const paddingForX = 20;
        const x: any = d3.scalePoint()
            .range([margin.left + 10 + paddingForX, width - margin.right - paddingForX])
            .domain(newData.map((d: any) => { return d.time }));
        
        const y = d3.scaleLinear()
            .range([height - margin.bottom, margin.top])
            .domain([0, 100]);
        
        const drawline = d3.line()
            .curve(d3.curveMonotoneX)
            .x((d: any) => x(d.time))
            .y((d: any) => y(d.score))

        svgElement = d3.select(ref.current)
        svgElement.attr("viewBox", [0, 0, width, height]).attr('class', 'line-chart');

        svgElement.append("g")
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            // if use timeScale
            // .call(d3.axisBottom(x).tickFormat((d: any) => timeFormat(d)).tickSizeOuter(0).tickSizeInner(0).tickPadding(10));
            .call(d3.axisBottom(x).tickSizeOuter(0).tickSizeInner(0).tickPadding(10));

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
                { offset: "0%", color: "#ffa00b" },
                { offset: "100%", color: "#42605e" }
            ])
            .enter().append("stop")
            .attr("offset", (d: any) => d.offset )
            .attr("stop-color", (d: any) => d.color );

        svgElement.append('path')
            .attr('class', 'line')
            .attr("stroke", "url(#line-gradient)")
            .attr("stroke-width", 3)
            .attr("fill", "none")
            .style("stroke-linecap", "round")
            .attr('d', drawline(newData));
        
        
        // filters go in defs element
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

        // @TODO
        svgElement.append('path')
            .attr('class', 'line-shadow')
            .attr("stroke", "#f3f3f3")
            // .attr("stroke", "url(#line-gradient)")
            .attr("stroke-width", 3)
            // .attr('transform', 'translate(0, 12)')
            .attr('opacity', 0.2)
            .attr("fill", "none")
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